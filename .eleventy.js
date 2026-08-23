import fs from "node:fs";
import path from "node:path";
import Handlebars from "handlebars";
import { format } from "date-fns/format";
import { de } from "date-fns/locale/de";
import markdown from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import { load } from "cheerio";
import pluginRss from "@11ty/eleventy-plugin-rss";
import handlebarsPlugin from "@11ty/eleventy-plugin-handlebars";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import htmlmin from "html-minifier-terser";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

const markdownIt = markdown();

const paths = {
	input: "src-next",
	output: process.env.npm_package_config_outdir,
};

const prod = process.env.NODE_ENV === "production";

const excerptSeparator = "<!-- more -->";

const isDraft = draft => (draft === "" ? true : Boolean(draft));

const isPublicationDateReached = publicationDate => {
	const inputDate = new Date(publicationDate);
	const today = new Date();

	const input = inputDate.toISOString().split("T")[0];
	const now = today.toISOString().split("T")[0];

	return input <= now;
};

const isPublished = post =>
	!isDraft(post.data.draft) && isPublicationDateReached(post.date);

export default function (eleventyConfig) {
	eleventyConfig.setTemplateFormats(["njk", "hbs", "md", "html", "txt"]);
	eleventyConfig.addPassthroughCopy(
		`./${paths.input}/**/*.{png,jpg,jpeg,webp,avif,mp4,xml,svg}`,
	);
	eleventyConfig.addPassthroughCopy(`./${paths.input}/static/fonts/**/*`);

	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		formats: ["webp", "jpg"],
		// 771: image width on help pages (desktop)
		widths: [400, 771, 800, 1200, 1600, "auto"],
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
			sizes: "100vw",
		},
	});

	eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
		if (outputPath && outputPath.endsWith(".html")) {
			return htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});
		}
		return content;
	});

	eleventyConfig.setFrontMatterParsingOptions({
		excerpt: true,
		excerpt_alias: "excerpt",
		excerpt_separator: excerptSeparator,
	});

	eleventyConfig.setLibrary(
		"md",
		markdown({
			html: true,
			breaks: false,
			linkify: true,
		}).use(markdownItAnchor, {
			slugify: str => slugify(str),
			tabIndex: false,
		}),
	);

	eleventyConfig.addPlugin(handlebarsPlugin);

	// Workaround for @11ty/eleventy-plugin-handlebars@1.0.0: it caches partials and
	// only re-registers them on "eleventy.resourceModified" — but that event is
	// emitted on Eleventy's internal eventBus, while the plugin (and any config) can
	// only listen on config.events, so the listener never fires and edited partials
	// stay stale during `--serve`. Re-register them ourselves before each rebuild.
	// Handlebars is a shared singleton, so this hits the plugin's instance.
	eleventyConfig.on("eleventy.beforeWatch", () => {
		const includesDir = `${paths.input}/_includes`;
		for (const entry of fs.readdirSync(includesDir, { recursive: true })) {
			if (!entry.endsWith(".hbs")) continue;
			const name = entry.replace(/\\/g, "/").replace(/\.hbs$/, "");
			const content = fs.readFileSync(path.join(includesDir, entry), "utf8");
			Handlebars.registerPartial(name, content);
		}
	});

	// Handlebars.registerHelper("eq", (a, b) => a === b);

	eleventyConfig.addShortcode("debug", function (...args) {
		console.log(...args);
	});

	eleventyConfig.addShortcode("date", function (date, formatFunction) {
		return format(date, formatFunction, { locale: de });
	});

	eleventyConfig.addShortcode("orElse", function (value, fallback) {
		return value || fallback;
	});

	eleventyConfig.addShortcode("addOne", function (value) {
		return value + 1;
	});

	// check if a given value equals some of the following values
	// e.g. ` {{#eq somethingToCheck "batman" "joker"}} ... {{/eq}}`
	eleventyConfig.addShortcode("eq", function (...args) {
		const [first, ...rest] = args;
		const [options] = rest.splice(-1);
		const equalsAtLeastOne = Array.from(rest).some(value => first === value);
		return equalsAtLeastOne ? options.fn(this) : null;
	});

	eleventyConfig.addShortcode("markdownToHtml", function (text) {
		return markdownIt.render(text);
	});

	eleventyConfig.addShortcode("excerptContent", function (excerpt) {
		return markdownIt.render(excerpt);
	});

	eleventyConfig.addShortcode("restContent", function (content, excerpt) {
		const excerptHtml = markdownIt.render(excerpt);
		return content.startsWith(excerptHtml)
			? content.slice(excerptHtml.length)
			: content;
	});

	function getBlogPosts(collection) {
		const allBlogPosts = collection
			.getFilteredByGlob(`./${paths.input}/neuigkeiten/**/*.md`)
			// newsest first
			.reverse();

		return prod ? allBlogPosts.filter(isPublished) : allBlogPosts;
	}

	eleventyConfig.addCollection("neuigkeiten", collection =>
		getBlogPosts(collection),
	);

	eleventyConfig.addShortcode("toc", function (data) {
		function renderNode(node) {
			let childrenHtml = "";
			if (node.children.length > 0) {
				childrenHtml = `<ul>${node.children
					.map(child => renderNode(child))
					.join("")}</ul>`;
			}
			let html = "";
			html += `<li class="toc-menu-item"><a href="${node.node.link}">${node.node.text}</a>${childrenHtml}</li>`;
			return html;
		}

		const $ = load(data.content);
		const headings = [...$("h2, h3")];
		const tree = tocTree(headings, 1, $);

		return tree.length === 0
			? ""
			: `<ul class="toc-menu">${tree
					.map(node => renderNode(node))
					.join("")}</ul>`;
	});

	eleventyConfig.addShortcode(
		"isPublicationDateNotReached",
		function (dateString, options) {
			if (!isPublicationDateReached(dateString)) {
				return options.fn(this);
			} else {
				return options.inverse(this);
			}
		},
	);

	eleventyConfig.addFilter("isNoDraft", function (draft) {
		return !isDraft(draft);
	});

	eleventyConfig.addFilter("isPublicationDateReached", function (dateString) {
		return isPublicationDateReached(dateString);
	});

	eleventyConfig.addShortcode("daysFromNow", function (dateString) {
		const targetDate = new Date(dateString);
		const today = new Date();

		// Strip the time to ensure full-day comparison
		const oneDay = 1000 * 60 * 60 * 24;
		const diffTime =
			targetDate.setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0);
		return Math.round(diffTime / oneDay);
	});

	eleventyConfig.addWatchTarget(`${paths.input}/static/js/**/*.js`);
	eleventyConfig.addWatchTarget(`${paths.input}/static/css/**/*.css`);

	return {
		dir: {
			input: paths.input,
			output: paths.output,
		},
	};
}

function tocTree(headings, parentLevel, $) {
	let nodes = [];

	let cursor = 0;
	while (cursor < headings.length) {
		const heading = headings[cursor];
		const level = headingLevel(heading.name);

		if (level <= parentLevel) {
			break;
		}

		const nextHeadings = Array.from(headings).splice(cursor + 1);
		const children = tocTree(nextHeadings, level, $);
		nodes.push({
			node: {
				// do not use slug and/or title as attribute names.
				// this collides with markdown-it-anchor
				link: "#" + heading.attribs.id,
				text: $(heading).text(),
			},
			children,
		});
		cursor += children.length;

		cursor++;
	}

	return nodes;
}

function headingLevel(h) {
	switch (h) {
		case "h1":
			return 1;
		case "h2":
			return 2;
		case "h3":
			return 3;
		case "h4":
			return 4;
		case "h5":
			return 5;
		case "h6":
			return 6;
	}
}

function slugify(str) {
	return str
		.toLowerCase()
		.replace(/ä/g, "ae")
		.replace(/ö/g, "oe")
		.replace(/ü/g, "ue")
		.replace(/ß/g, "ss")
		.replace(/[():?!.,$§]/g, "")
		.replace(/\s+/g, "-")
		.replace(/--*/g, "-")
		.replace(/^-/, "")
		.replace(/-$/, "");
}

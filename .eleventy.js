const { format } = require("date-fns/format");
const { de } = require("date-fns/locale/de");
const markdown = require("markdown-it");
const markdownIt = require("markdown-it")();
const markdownItAnchor = require("markdown-it-anchor");
const cheerio = require("cheerio");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const htmlmin = require("html-minifier-terser");

const paths = {
	input: "src",
	output: process.env.npm_package_config_outdir,
};

const prod = process.env.NODE_ENV === "production";

const not =
	fn =>
	(...args) =>
		!fn(...args);
const isDraft = post =>
	post.data.draft === "" ? true : Boolean(post.data.draft);

const isPublished = post => {
	const inputDate = new Date(post.date);
	const today = new Date();

	const input = inputDate.toISOString().split("T")[0];
	const now = today.toISOString().split("T")[0];

	return now <= input;
};

module.exports = function (eleventyConfig) {
	eleventyConfig.setTemplateFormats(["njk", "hbs", "md", "html", "txt"]);
	eleventyConfig.addPassthroughCopy(
		"./src/**/*.{png,jpg,jpeg,webp,avif,mp4,xml}",
	);
	eleventyConfig.addPassthroughCopy({ "./public/static": "static" });

	eleventyConfig.addPlugin(pluginRss);

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
		excerpt_separator: "<!-- more -->",
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

	eleventyConfig.addHandlebarsHelper("debug", function (...args) {
		console.log(...args);
	});

	eleventyConfig.addHandlebarsHelper("date", function (date, formatFunction) {
		return format(date, formatFunction, { locale: de });
	});

	// check if a given value equals some of the following values
	// e.g. ` {{#eq somethingToCheck "batman" "joker"}} ... {{/eq}}`
	eleventyConfig.addHandlebarsHelper("eq", function (...args) {
		const [first, ...rest] = args;
		const [options] = rest.splice(-1);
		const equalsAtLeastOne = Array.from(rest).some(value => first === value);
		return equalsAtLeastOne ? options.fn(this) : null;
	});

	eleventyConfig.addHandlebarsHelper("markdownToHtml", function (text) {
		return markdownIt.render(text);
	});

	eleventyConfig.addCollection("blogposts", function (collection) {
		const allBlogPosts = collection
			.getFilteredByGlob("./src/neuigkeiten/**/*.md")
			.reverse();

		return prod
			? allBlogPosts.filter(not(isDraft)).filter(not(isPublished))
			: allBlogPosts;
	});

	eleventyConfig.addHandlebarsHelper("toc", function (data) {
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

		const $ = cheerio.load(data.content);
		const headings = [...$("h2, h3")];
		const tree = tocTree(headings, 1, $);

		return tree.length === 0
			? ""
			: `<ul class="toc-menu">${tree
					.map(node => renderNode(node))
					.join("")}</ul>`;
	});

	eleventyConfig.addHandlebarsHelper(
		"IsNotPublished",
		function (dateString, options) {
			const inputDate = new Date(dateString);
			const today = new Date();

			// Normalize to YYYY-MM-DD
			const input = inputDate.toISOString().split("T")[0];
			const now = today.toISOString().split("T")[0];

			if (now < input) {
				return options.fn(this);
			} else {
				return options.inverse(this);
			}
		},
	);

	eleventyConfig.addFilter("IsNotPublishedBoolean", function (dateString) {
		const now = new Date();
		const inputDate = new Date(dateString);
		return inputDate < now;
	});

	eleventyConfig.addHandlebarsHelper("daysFromNow", function (dateString) {
		const targetDate = new Date(dateString);
		const today = new Date();

		// Strip the time to ensure full-day comparison
		const oneDay = 1000 * 60 * 60 * 24;
		const diffTime =
			targetDate.setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0);
		return Math.round(diffTime / oneDay);
	});

	eleventyConfig.addWatchTarget("src/static/js/**/*.js");
	eleventyConfig.addWatchTarget("src/static/css/**/*.css");

	return {
		dir: {
			input: paths.input,
			output: paths.output,
		},
	};
};

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

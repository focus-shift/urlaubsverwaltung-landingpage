const formatDate = require("date-fns/format");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const cheerio = require("cheerio");

const paths = {
	input: "src",
	output: "build",
};

module.exports = function (eleventyConfig) {
	eleventyConfig.setTemplateFormats(["njk", "hbs", "md", "html", "txt"]);

	eleventyConfig.addPassthroughCopy("src/**/*.{png,jpg,jpeg,webp,avif}");

	eleventyConfig.setLibrary("md",
		markdownIt({
			html: true,
			breaks: true,
			linkify: true
		})
		.use(markdownItAnchor, {
			slugify: str => slugify(str),
			tabIndex: false,
		})
	);

	eleventyConfig.addHandlebarsHelper("debug", function (...args) {
		console.log(...args);
	});

	eleventyConfig.addHandlebarsHelper("date", function (date, format) {
		return formatDate(date, format);
	});

	eleventyConfig.addHandlebarsHelper("eq", function (one, two, options) {
		return one === two ? options.fn(this) : null;
	});

	eleventyConfig.addHandlebarsHelper("toc", function (data) {
		function renderNode(node) {
			let childrenHtml = "";
			if (node.children.length > 0) {
				childrenHtml = `<ul>${node.children.map(child => renderNode(child)).join("")}</ul>`;
			}
			let html = "";
			html += `<li class="toc-menu-item"><a href="${node.node.link}">${node.node.text}</a>${childrenHtml}</li>`
			return html;
		}

		const $ = cheerio.load(data.content);
		const headings = [...$("h2, h3")]
		const tree = tocTree(headings, 1, $);

		return tree.length === 0 ? "" : `<ul class="toc-menu">${tree.map(node => renderNode(node)).join("")}</ul>`;
	});

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
	switch(h) {
		case "h1": return 1;
		case "h2": return 2;
		case "h3": return 3;
		case "h4": return 4;
		case "h5": return 5;
		case "h6": return 6;
	}
}

function slugify(str) {
	return str.toLowerCase()
		.replace(/ä/g, 'ae')
		.replace(/ö/g, 'oe')
		.replace(/ü/g, 'ue')
		.replace(/ß/g, 'ss')
		.replace(/[?!.,$§]/g, '')
		.replace(/\s+/g, '-')
		.replace(/--*/g, '-')
		.replace(/^-/, '')
		.replace(/-$/, '')
}

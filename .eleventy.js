const formatDate = require("date-fns/format");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const cheerio = require("cheerio");

const paths = {
	input: "src",
	output: "build",
};

module.exports = function (eleventyConfig) {
	eleventyConfig.setTemplateFormats(["njk", "hbs", "md", "txt"]);

	eleventyConfig.addPassthroughCopy("src/**/*.{png,jpg,jpeg,webp,avif}");

	eleventyConfig.setLibrary("md",
		markdownIt({
			html: true,
			breaks: true,
			linkify: true
		})
		.use(markdownItAnchor, {
			permalink: markdownItAnchor.permalink.headerLink({ safariReaderFix: true }),
			slugify: str => slugify(str),
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

	eleventyConfig.addHandlebarsHelper("toc", function (data, options) {
		const $ = cheerio.load(data.content);
		return [...$("h2")]
			// do not use slug and/or title as attribute names.
			// this collides with markdown-it-anchor
			.map(h => ({ link: "#" + h.attribs.id, text: $(h).text() }))
			.reduce((html, heading) => html + options.fn(heading), "");
	});

	return {
		dir: {
			input: paths.input,
			output: paths.output,
		},
	};
};

function slugify(str) {
	return str.toLowerCase()
		.replace(/ä/g, 'ae')
		.replace(/ö/g, 'ou')
		.replace(/ü/g, 'ue')
		.replace(/ß/g, 'ss')
		.replace(/[?!.,$§]/g, '')
		.replace(/\s+/g, '-')
		.replace(/--*/g, '-')
		.replace(/^-/, '')
		.replace(/-$/, '')
}

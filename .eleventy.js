const formatDate = require("date-fns/format");
const localeDe = require("date-fns/locale/de");
const markdown = require("markdown-it")();
const pluginRss = require("@11ty/eleventy-plugin-rss");

const paths = {
	input: "src",
	output: "build",
};

const prod = process.env.NODE_ENV === "production";

const not = fn => (...args) => !fn(...args);
const isDraft = post =>
	post.data.draft === "" ? true : Boolean(post.data.draft);

module.exports = function (eleventyConfig) {
	eleventyConfig.setTemplateFormats(["njk", "hbs", "md", "txt"]);
	eleventyConfig.addPassthroughCopy("src/**/*.{png,jpg,jpeg,webp}");

	eleventyConfig.addPlugin(pluginRss);

	eleventyConfig.setFrontMatterParsingOptions({
		excerpt: true,
		excerpt_alias: "excerpt",
		excerpt_separator: "<!-- more -->",
	});

	eleventyConfig.addHandlebarsHelper("date", function (date, format) {
		return formatDate(date, format, { locale: localeDe });
	});

	eleventyConfig.addHandlebarsHelper("eq", function (one, two, options) {
		return one === two ? options.fn(this) : null;
	});

	eleventyConfig.addHandlebarsHelper("markdownToHtml", function (text) {
		return markdown.render(text);
	});

	eleventyConfig.addCollection("blogposts", function (collection) {
		const allBlogPosts = collection
			.getFilteredByGlob("./src/neuigkeiten/**/*.md")
			.reverse();

		return prod ? allBlogPosts.filter(not(isDraft)) : allBlogPosts;
	});

	return {
		dir: {
			input: paths.input,
			output: paths.output,
		},
	};
};

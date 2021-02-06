const formatDate = require("date-fns/format");
const pluginRss = require("@11ty/eleventy-plugin-rss");

const paths = {
	input: "src",
	output: "build",
};

const isProd = process.env.NODE_ENV === "production";

const not = fn => (...args) => !fn(...args);
const isDraft = post => Boolean(post.data.draft);

module.exports = function (eleventyConfig) {
	eleventyConfig.setTemplateFormats(["njk", "hbs", "md", "txt"]);

	eleventyConfig.addPlugin(pluginRss);

	eleventyConfig.addHandlebarsHelper("date", function (date, format) {
		return formatDate(date, format);
	});

	eleventyConfig.addCollection("blogposts", function (collection) {
		const allBlogPosts = collection
			.getFilteredByGlob("./src/blog/**/*.md")
			.reverse();

		return isProd ? allBlogPosts.filter(not(isDraft)) : allBlogPosts;
	});

	return {
		dir: {
			input: paths.input,
			output: paths.output,
		},
	};
};

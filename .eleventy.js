const formatDate = require("date-fns/format");

const paths = {
	input: "src",
	output: "build",
};

module.exports = function (eleventyConfig) {
	eleventyConfig.setTemplateFormats(["njk", "hbs", "md", "txt"]);

	eleventyConfig.addPassthroughCopy("src/**/*.{png,jpg,jpeg,webp,avif}");

	eleventyConfig.addHandlebarsHelper("date", function (date, format) {
		return formatDate(date, format);
	});

	eleventyConfig.addHandlebarsHelper("eq", function (one, two, options) {
		return one === two ? options.fn(this) : null;
	});

	return {
		dir: {
			input: paths.input,
			output: paths.output,
		},
	};
};

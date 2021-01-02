const formatDate = require("date-fns/format");

const paths = {
	input: "src",
	output: "build",
};

module.exports = function (eleventyConfig) {
	eleventyConfig.setTemplateFormats(["njk", "hbs", "md", "txt"]);

	eleventyConfig.addHandlebarsHelper("date", function (date, format) {
		return formatDate(date, format);
	});

	return {
		dir: {
			input: paths.input,
			output: paths.output,
		},
	};
};

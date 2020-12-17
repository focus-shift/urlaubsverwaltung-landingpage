const paths = {
	input: "src",
	output: "build",
};

module.exports = function (eleventyConfig) {
	eleventyConfig.setTemplateFormats(["njk", "hbs", "md", "txt"]);
	return {
		dir: {
			input: paths.input,
			output: paths.output,
		},
	};
};

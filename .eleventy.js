const paths = {
	input: "src",
	output: "build",
};

module.exports = function (eleventyConfig) {
	return {
		dir: {
			input: paths.input,
			output: paths.output,
		},
	};
};

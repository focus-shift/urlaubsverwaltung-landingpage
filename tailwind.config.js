module.exports = {
	purge: ["./src/**/*.hbs"],
	theme: {
		extend: {
			listStyleType: {
				latin: "lower-latin",
			},
			translate: (theme, { negative }) => ({
				...theme("spacing"),
				...negative(theme("spacing")),
				"-full": "-100%",
				"-1/2": "-50%",
				"-1/4": "-25%",
				"1/4": "25%",
				"1/2": "50%",
				full: "100%",
			}),
		},
	},
};

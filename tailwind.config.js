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
			maxWidth: {
				"7xl": "80rem",
				"8xl": "88rem",
				"9xl": "96rem",
				"10xl": "104rem",
			},
		},
	},
};

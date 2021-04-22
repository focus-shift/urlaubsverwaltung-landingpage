const colors = require("tailwindcss/colors");
const defaultConfig = require("tailwindcss/defaultConfig.js");

module.exports = {
	purge: {
		content: ["./src/**/*.hbs", "./src/**/*.md", "./static/**/*.js"],
		options: {
			safelist: [/^zammad-/],
		},
	},
	theme: {
		extend: {
			fontFamily: {
				header: [
					"Raleway",
					"system-ui",
					"-apple-system",
					"'Segoe UI'",
					"Roboto",
					"Helvetica",
					"sans-serif",
				],
				content: [
					"Lato",
					"system-ui",
					"-apple-system",
					"'Segoe UI'",
					"Roboto",
					"Helvetica",
					"sans-serif",
				],
			},
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
			spacing: {
				13: "3.25rem",
				15: "3.75rem",
				17: "4.25rem",
				18: "4.5rem",
				19: "4.75rem",
			},
			colors: {
				...colors,
			},
		},
		screens: {
			// cannot use 'extend' as `xs` would override other screens
			// since it would be added to the bottom of the css file
			xs: "480px",
			...defaultConfig.theme.screens,
		},
	},
	variants: {
		extend: {
			boxShadow: ["active"],
		},
	},
};

const paths = {
	out: "dist",
};

module.exports = {
	mount: {
		build: "/",
		static: "/static/",
	},
	plugins: [
		"@snowpack/plugin-optimize",
		["@snowpack/plugin-postcss", { config: "postcss.config.js" }],
		["@snowpack/plugin-run-script", { cmd: "eleventy", watch: "$1 --watch" }],
		"snowpack-plugin-cache-bust",
	],
	devOptions: {
		out: "dist",
		port: 3000,
		open: "none",
		hmr: true,
		hmrDelay: 300,
	},
	buildOptions: {
		out: paths.out,
	},
};

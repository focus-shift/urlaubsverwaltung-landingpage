const withCSS = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");
const withImages = require("next-images");

const config = {
	env: {
		CONTENT_HOST: "http://localhost:3000",
		BASE_PATH: process.env.BASE_PATH || "",
	},
	assetPrefix: process.env.ASSET_PREFIX || "",
};

function compose(...fns) {
	return config => fns.reduceRight((config, fn) => fn(config), config);
}

module.exports = compose(
	withCSS,
	withPurgeCss,
	withImages,
)(config);

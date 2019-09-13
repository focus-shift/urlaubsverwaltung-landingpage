const withCSS = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");
const withImages = require("next-images");
const withMdx = require("@zeit/next-mdx")();

const isProd = process.env.NODE_ENV === "production";

const config = {
	env: {
		CONTENT_HOST: "http://localhost:3000",
		BASE_PATH: process.env.BASE_PATH || "",
	},
	purgeCss: {
		whitelist: ["body", "html", "__next"],
		extractors: [
			{
				extractor: class TailwindExtractor {
					static extract(content) {
						return content.match(/[ÄÖÜäöüA-Za-z0-9:/_-]+/g) || [];
					}
				},
				extensions: ["tailwind.css", "js", "jsx", "ts", "tsx", "svg"],
			},
		],
	},
	assetPrefix: process.env.ASSET_PREFIX || "",
};

function compose(...fns) {
	return config =>
		fns.reduceRight((config, fn) => (fn ? fn(config) : config), config);
}

module.exports = compose(
	withCSS,
	isProd && withPurgeCss,
	withImages,
	withMdx,
)(config);

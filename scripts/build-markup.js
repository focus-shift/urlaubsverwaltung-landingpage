#!/usr/bin/env node

const fse = require("fs-extra");
const path = require("path");
const Handlebars = require("handlebars");

const outDir = path.resolve(__dirname, "../out");
const pagesDir = path.resolve(__dirname, "../src/pages");
const partialsDir = path.resolve(__dirname, "../src/partials");

const isProduction = process.env.NODE_ENV === "production";

// register handlebars partials
const partialFilenames = fse.readdirSync(partialsDir);
for (const partial of partialFilenames) {
	const matches = /^([^.]+).hbs$/.exec(partial);
	if (matches) {
		const name = matches[1];
		const template = fse.readFileSync(path.join(partialsDir, partial), "utf8");
		Handlebars.registerPartial(name, template);
	}
}

const pageFilenames = fse.readdirSync(pagesDir);
for (const page of pageFilenames) {
	const content = fse.readFileSync(path.join(pagesDir, page), "utf8");
	const template = Handlebars.compile(content);
	const filename = page.replace(/\.hbs$/, ".html");
	let html = template();
	if (isProduction) {
		const { minify } = require("html-minifier");
		html = minify(html, {
			collapseWhitespace: true,
			removeComments: true,
			removeOptionalTags: true,
			removeRedundantAttributes: true,
			removeTagWhitespace: true,
			minifyCSS: true,
			minifyJS: true,
		});
	}
	fse.writeFileSync(path.join(outDir, filename), html, "utf8");
	console.log(`  - ${filename}`);
}

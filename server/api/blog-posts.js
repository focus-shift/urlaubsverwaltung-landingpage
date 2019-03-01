const fs = require("fs");
const path = require("path");
const util = require("util");

const readdir = util.promisify(fs.readdir);
const readfile = util.promisify(fs.readFile);

const blogDirectoryPath = path.resolve(__dirname, "../../blog");

module.exports.getPosts = async function getBlogPosts() {
	const content = await readdir(blogDirectoryPath, {
		encoding: "utf8",
		withFileTypes: true,
	});
	return content
		.filter(dirent => dirent.isFile())
		.filter(dirent => dirent.name.endsWith("md"))
		.map(dirent => ({ filename: dirent.name.replace(/\.\w+$/, "") }));
};

module.exports.getPost = async function getBlogPost({ filename }) {
	const blogPath = path.resolve(blogDirectoryPath, filename + ".md");
	const blog = await readfile(blogPath, "utf8");
	return blog;
};

const blog = require("./blog-posts");

module.exports = {
	"/posts": async (req, res) => {
		const posts = await blog.getPosts();
		res.json({ posts });
	},
	"/posts/:identifier": async (req, res) => {
		const { identifier } = req.params;
		const content = await blog.getPost({ filename: identifier });
		// res.setHeader("Content-Type", "text/markdown; charset=UTF-8");
		res.send(content);
	},
};

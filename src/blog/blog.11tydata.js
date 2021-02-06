const prod = process.env.NODE_ENV === "production";

module.exports = {
	eleventyComputed: {
		permalink: data => {
			if (data.draft && prod) {
				// ignore permalink for drafts on production mode
				// -> no html file will be generated
				return false;
			}
			return data.permalink;
		},
	},
};

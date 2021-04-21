const prod = process.env.NODE_ENV === "production";

module.exports = {
	eleventyComputed: {
		draft: data => {
			return data.draft === "" ? true : Boolean(data.draft);
		},
		teaserImage: data => {
			return data.teaserImage || "";
		},
		permalink: data => {
			if ((data.draft === "" || data.draft) && prod) {
				// ignore permalink for drafts on production mode
				// -> no html file will be generated
				return false;
			}
			return data.permalink;
		},
	},
};

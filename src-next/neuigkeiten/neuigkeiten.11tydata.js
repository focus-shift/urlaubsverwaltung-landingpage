const prod = process.env.NODE_ENV === "production";

/**
 * @typedef {("blog"|"update")} ArticleCategory
 */

/**
 */
export default {
	eleventyComputed: {
		draft: data => {
			return data.draft === "" ? true : Boolean(data.draft);
		},
		teaserImage: data => {
			if (isIndexPage(data)) {
				return;
			}

			const category = getCategory(data);
			if (category === "update") {
				if (data.teaserImage) {
					console.warn(
						`[WARN] overriding teaser image of blog article category=update path=${data.page.inputPath}`,
					);
				}
				return {
					src: "/static/img/blog-update-teaser.png",
					alt: "",
					class: "p-8 w-full h-full object-contain",
				};
			}

			if (data.teaserImage) {
				if (typeof data.teaserImage === "string") {
					let src;
					if (data.teaserImage.startsWith("/")) {
						// absolute image url
						src = data.teaserImage;
					} else {
						// relative teaser image, file is in article directory
						src = data.page.url + data.teaserImage;
					}
					return {
						src,
						// TODO teaser image alt text?
						alt: "",
						class: "w-full h-full object-cover object-[center_30%]",
					};
				}
				if (!data.teaserImage.src || typeof data.teaserImage.alt !== "string") {
					throw new Error("expected teaser image to define 'src' and 'alt'");
				}
				return data.teaserImage;
			}

			// throw new Error(`blog category=${category} requires a teaser image`);
			console.error(
				`[WARN] article requires a teaser image category=${category}`,
				data.page.inputPath,
			);
		},
		navigation: {
			activeItem: "neuigkeiten",
		},
		category: data => {
			return isIndexPage(data) ? undefined : getCategory(data);
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

function isIndexPage(data) {
	return Boolean(data.page?.url === "/neuigkeiten/");
}

/**
 * @param data eleventy data for current element
 * @return {ArticleCategory}
 */
function getCategory(data) {
	if (
		data.category === "update" ||
		data.page?.inputPath.endsWith("-release/index.md") ||
		data.page?.inputPath.includes("-release-")
	) {
		return "update";
	}
	return data.category || "blog";
}

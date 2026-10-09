export default {
	// path on focus-shift.de the page redirects to (see layout-redirect.hbs).
	// legacy `redirect_from` aliases (src/redirect.njk) point straight to their final page.
	// the 404 page has no matching path at build time, it uses location.pathname at runtime.
	redirectPath: data => {
		if (data.redirect?.to) {
			return data.redirect.to;
		}
		if (data.page.url === "/404.html") {
			return "";
		}
		return data.page.url;
	},
};

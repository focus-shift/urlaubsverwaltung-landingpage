window.addEventListener("click", function (event) {
	if (typeof plausible === "function") {
		const link =
			event.target.tagName === "A" ? event.target : event.target.closest("a");
		if (!link) {
			return;
		}
		const { goal, goalTrigger } = link.dataset;
		if (goal) {
			// eslint-disable-next-line no-undef
			plausible(goal, { props: { trigger: goalTrigger } });
			if (!(event.ctrlKey || event.metaKey || event.shiftKey)) {
				setTimeout(function () {
					location.href = link.href;
				}, 100);
				event.preventDefault();
			}
		}
	}
});

(function () {
	let utmParameter = [
		"utm_medium",
		"utm_source",
		"utm_campaign",
		"utm_term",
		"utm_content",
	];

	let urlParams = new URLSearchParams(document.location.search);
	for (let utmParam of utmParameter) {
		addUrlParamToSessionStorage(urlParams, utmParam);
	}

	let joinedUtmParameter = utmParameter
		.map(param => {
			const value = sessionStorage.getItem(param);
			return value ? [param, value] : "";
		})
		.filter(Boolean);

	if (joinedUtmParameter.length > 0) {
		let allUtmAnchors = document.querySelectorAll("a[data-append-utm]");
		for (let utmAnchor of allUtmAnchors) {
			let url = new URL(utmAnchor.href);
			for (let [param, value] of joinedUtmParameter) {
				url.searchParams.set(param, value);
			}
			utmAnchor.href = url.toString();
		}
	}

	function addUrlParamToSessionStorage(urlParams, urlParamName) {
		let paramValue = urlParams.get(urlParamName);
		if (paramValue !== null) {
			sessionStorage.setItem(urlParamName, paramValue);
		}
	}
})();

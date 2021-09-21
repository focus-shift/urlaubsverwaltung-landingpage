window.addEventListener("click", function (event) {
	if (typeof plausible === "function") {
		const link =
			event.target.tagName === "A" ? event.target : event.target.closest("a");
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

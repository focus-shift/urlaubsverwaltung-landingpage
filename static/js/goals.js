window.addEventListener("click", function (event) {
	if (typeof plausible === "function") {
		const { goal, goalTrigger } = event.target.dataset;
		if (goal) {
			// eslint-disable-next-line no-undef
			plausible(goal, { props: { trigger: goalTrigger } });
			if (event.target.tagName === "A") {
				event.preventDefault();
				if (!(event.ctrlKey || event.metaKey || event.shiftKey)) {
					setTimeout(function () {
						location.href = event.target.href;
					}, 100);
					event.preventDefault();
				}
			}
		}
	}
});

window.addEventListener("click", function (event) {
	if (typeof plausible === "function") {
		const { goal, goalTrigger } = event.target.dataset;
		if (goal) {
			// eslint-disable-next-line no-undef
			plausible(goal, { props: { trigger: goalTrigger } });
		}
	}
});

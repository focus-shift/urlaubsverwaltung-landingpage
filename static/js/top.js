(function () {
	const toTopButton = document.querySelector("a[href='#top']");
	const container = toTopButton.parentNode;
	const target = document.querySelector("#" + toTopButton.href.split("#")[1]);

	container.classList.remove("hidden");
	container.classList.add(
		"transform",
		"transition-transform",
		"translate-y-full",
	);

	window.addEventListener(
		"scroll",
		function () {
			if (window.scrollY > window.innerHeight) {
				container.classList.remove("translate-y-full");
			} else {
				container.classList.add("translate-y-full");
			}
		},
		{ passive: true },
	);

	toTopButton.addEventListener("click", function (event) {
		target.scrollIntoView({ behavior: "smooth" });
		event.preventDefault();
	});
})();

const headingElements = [
	...document.querySelectorAll(".wissensbasis-content h2"),
];

window.addEventListener("DOMContentLoaded", () => {
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute("id");
			if (entry.intersectionRatio > 0) {
				document
					.querySelector(`a[href="#${id}"]`)
					.setAttribute("aria-current", "location");
			} else {
				document
					.querySelector(`a[href="#${id}"]`)
					.removeAttribute("aria-current");
			}
		});
	});

	headingElements.forEach(section => {
		observer.observe(section);
	});
});


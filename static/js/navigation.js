const menu = document.querySelector("#menu-toggle-checkbox");

menu.addEventListener("change", function () {
	updateBodyScrollLock();
});

window.addEventListener(
	"resize",
	function () {
		updateBodyScrollLock();
	},
	{ passive: true },
);

window.addEventListener("click", function (event) {
	const link =
		event.target.tagName === "A" ? event.target : event.target.closest("a");
	if (!link) {
		return;
	}
	const { hash } = link;
	if (hash) {
		const targetElement = document.getElementById(hash.substr(1));
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" });
			window.history.pushState(null, null, hash);
			event.preventDefault();
		}
	}
});

function updateBodyScrollLock() {
	if (!mdScreen() && menu.checked) {
		document.body.classList.add("overflow-hidden");
	} else {
		document.body.classList.remove("overflow-hidden");
	}
}

function mdScreen() {
	return window.matchMedia("(min-width: 768px)").matches;
}

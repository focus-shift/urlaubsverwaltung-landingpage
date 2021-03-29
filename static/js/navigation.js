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

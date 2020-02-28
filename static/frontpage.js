const main = document.querySelector("#main-content");
const overlay = document.querySelector("#overlay");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");
const featureCardElements = document.querySelectorAll(".feature-card");

let { height: navHeight } = nav.getBoundingClientRect();
let { height: overlayHeight } = overlay.getBoundingClientRect();

for (const card of featureCardElements) {
	const element = document.querySelector(card.dataset.cardFor);
	if (element) {
		card.style.transform = `translateY(100vh)`;
	}
}

main.style.transform = "";
// counterpart for main.style.transform
// required when we click 'prices' link in the navigation for example
footer.style.marginBottom = `${overlayHeight}px`;

let userHasInteracted = false;
window.addEventListener("scroll", () => (userHasInteracted = true), {
	once: true,
});

window.addEventListener("pageshow", () => {
	if (userHasInteracted) {
		return;
	}

	let scrollToTop = 0;

	const top = sessionStorage.getItem("lastscroll_y");
	if (Number(top)) {
		scrollToTop = -1 * top;
	}

	const { hash } = window.location;
	if (hash) {
		const element = document.querySelector(hash);
		if (element) {
			scrollToTop = element.offsetParent.offsetTop + overlayHeight - navHeight;
		}
	}

	window.scrollTo({
		top: scrollToTop,
		// use scroll behaviour 'smooth'
		// to trigger hacky hack footer style margin calculations
		// in scroll listener
		behavior: "smooth",
	});
	sessionStorage.removeItem("lastscroll_y");
});

document.addEventListener(
	"scroll",
	function handleScroll() {
		repositionCardElements();
		sessionStorage.setItem("lastscroll_y", top);
	},
	{
		passive: true,
	},
);

window.addEventListener(
	"resize",
	function handleResize() {
		overlayHeight = overlay.getBoundingClientRect().height;
		repositionCardElements();
	},
	{
		passive: true,
	},
);

function repositionCardElements() {
	const { top } = overlay.getBoundingClientRect();

	if (Math.abs(top) <= overlayHeight) {
		main.style.transform = `translateY(${-1 * top}px)`;
		if (top == 0) {
			footer.style.marginBottom = `${overlayHeight}px`;
		} else {
			footer.style.marginBottom = `${top}px`;
		}
		for (let card of featureCardElements) {
			card.style.transform = `translateY(${overlayHeight + top}px)`;
		}
	} else {
		main.style.transform = `translateY(${overlayHeight}px)`;
		for (let card of featureCardElements) {
			card.style.transform = `translateY(0)`;
		}
	}

	if (Math.abs(top) >= overlayHeight - navHeight) {
		nav.classList.add("fixed", "top-0");
		nav.classList.remove("absolute", "bottom-0");
	} else {
		nav.classList.remove("fixed", "top-0");
		nav.classList.add("absolute", "bottom-0");
	}
}

nav.addEventListener("click", function handleClick(event) {
	if (event.target.tagName === "A") {
		if (event.target.hash !== "#") {
			event.preventDefault();
			navigateToElement(event.target);
		}
	}
});

document
	.querySelector("#overlay-arrow-link")
	.addEventListener("click", event => {
		event.preventDefault();

		// firefox give us the path element of the svg
		// chrome the link ¯\_(ツ)_/¯
		let linkElement = event.target;
		while (linkElement.tagName !== "A") {
			linkElement = linkElement.parentNode;
		}

		navigateToElement(linkElement);
	});

function navigateToElement(link) {
	window.history.replaceState(null, null, link.hash);
	const element = document.querySelector(link.hash);
	if (element) {
		window.scrollTo({
			top: element.offsetParent.offsetTop + overlayHeight - navHeight,
			behavior: "smooth",
		});
	}
}

let currentDialog;

document.addEventListener("click", function (event) {
	if (event.defaultPrevented) {
		return;
	}
	if (currentDialog) {
		let { promise, resolve } = Promise.withResolvers();
		const max = new Promise(resolve => setTimeout(resolve, 300));
		currentDialog.addEventListener(
			"transitionend",
			() => {
				console.log("transitionend");
				resolve(0);
			},
			{ once: true },
		);
		currentDialog.classList.remove("image-magnifier-dialog--open");
		Promise.race([promise, max]).then(() => {
			currentDialog.close();
			currentDialog.remove();
			currentDialog = undefined;
		});
	}
});

document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll("img[data-magnifiable]").forEach(img => {
		img.addEventListener("click", event => {
			event.preventDefault();

			const newImg = img.cloneNode();

			const dialog = document.createElement("dialog");
			dialog.classList.add("image-magnifier-dialog");
			dialog.appendChild(newImg);

			document.body.appendChild(dialog);
			dialog.classList.add("image-magnifier-dialog--open");
			dialog.showModal();

			currentDialog = dialog;
		});
	});
});

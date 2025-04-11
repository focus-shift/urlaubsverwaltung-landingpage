let currentDialog;

document.addEventListener("click", function (event) {
	if (event.defaultPrevented) {
		return;
	}
	if (currentDialog) {
		currentDialog.close();
		currentDialog.remove();
		currentDialog = undefined;
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
			dialog.showModal();

			currentDialog = dialog;
		});
	});
});

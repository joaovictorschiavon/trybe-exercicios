let submitButton = document.getElementById("btn-submit");
submitButton.addEventListener("click", getPreferences);
let pElement = document.getElementsByTagName("p")[0];

function getPreferences() {
	let nbgColor = document.getElementById("bgroundColor").value;
	let ntextColor = document.getElementById("textColor").value;
	let nfontSize = document.getElementById("fontSize").value;
	let nlineHeigth = document.getElementById("lineHeigth").value;
	let nfontFamily = document.getElementById("fontFamily").value;

	if (nbgColor.length > 0) {
		pElement.style.backgroundColor = nbgColor;
	}
	if (ntextColor.length > 0) {
		pElement.style.color = ntextColor;
	}
	if (nfontSize.length > 0) {
		pElement.style.fontSize = nfontSize;
	}
	if (nlineHeigth.length > 0) {
		pElement.style.lineHeight = nlineHeigth;
	}
	if (nfontFamily.length > 0) {
		pElement.style.fontFamily = nfontFamily;
	}
}
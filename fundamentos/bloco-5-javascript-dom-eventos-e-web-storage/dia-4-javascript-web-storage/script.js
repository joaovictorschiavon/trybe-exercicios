window.addEventListener("load", setCssValuesOnLoad )

function setCssValuesOnLoad() {
	let bkg = localStorage.getItem("storagedBackgroundColor");
	pElement.style.backgroundColor = bkg;
	let tcolor = localStorage.getItem("storagedTextColor");
	pElement.style.color = tcolor;
	let fsize = localStorage.getItem("storagedFontSize");
	pElement.style.fontSize = fsize;
	let lheight = localStorage.getItem("storagedLineHeight");
	pElement.style.lineHeight = lheight;
	let fofamily = localStorage.getItem("storagedFontFamily");
	pElement.style.fontFamily = fofamily;
}

let submitButton = document.getElementById("btn-submit");
submitButton.addEventListener("click", getPreferences);
let pElement = document.getElementsByTagName("p")[0];

function getPreferences() {
	let nbgColor = document.getElementById("bgroundColor").value;
	let ntextColor = document.getElementById("textColor").value;
	let nfontSize = document.getElementById("fontSize").value;
	let nlineHeight = document.getElementById("lineHeight").value;
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
		pElement.style.lineHeight = nlineHeight;
	}
	if (nfontFamily.length > 0) {
		pElement.style.fontFamily = nfontFamily;
	}
	saveCssProperties();
}

function saveCssProperties() {
	localStorage.setItem("storagedBackgroundColor", 
	pElement.style.backgroundColor);
	localStorage.setItem("storagedTextColor",
	pElement.style.color);
	localStorage.setItem("storagedFontSize", 
	pElement.style.fontSize);
	localStorage.setItem("storagedLineHeight", 
	pElement.style.lineHeight);
	localStorage.setItem("storagedFontFamily", 
	pElement.style.fontFamily);
}

// Floating button
let divButton = document.createElement("div");
divButton.classList.add('floating-btn-switch');
divButton.id = "floating-btn-switch";

// Image inside the floating button
let img = document.createElement("img");
img.src = 'https://londonvetspecialists.vet/wp-content/uploads/2020/04/covid-icon.png';

// Button stroke
let divStroke = document.createElement("div");
divStroke.classList.add('button-stroke');
divStroke.id = "button-stroke";

document.body.appendChild(divButton);
divButton.appendChild(img);
divButton.appendChild(divStroke);

let areHidden = false;


function changeArticlesDisplay() {
	if (areHidden) {
		areHidden = false;
		showArticles(document.body);
	} else {
		areHidden = true;
		hideArticles(document.body);
	}
}

function hideArticles(element) {
	// Hiding stroke line of the button
	document.getElementById("button-stroke").classList.add("hidden");

	// Hiding text that is covid-related
	if (element.hasChildNodes()) {
		element.childNodes.forEach(hideArticles)
	} else if (element.nodeType === Text.TEXT_NODE) {
		if (element.textContent.match(/covid-19|coronavirus|koronavir|pendem|corona|karantin|quarantine/gi)) {
			element.parentElement.classList.add("hidden");
		}
	}
}

function showArticles() {
	let hiddenElements = document.querySelectorAll(".hidden");

	hiddenElements.forEach(element => {
		element.classList.remove("hidden");
	});

	// Showing stroke line of the button
	document.getElementById("button-stroke").classList.remove("hidden");
}


// Event listener
document.getElementById("floating-btn-switch").addEventListener("click", changeArticlesDisplay);
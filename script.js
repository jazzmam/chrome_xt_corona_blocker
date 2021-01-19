
// Hiding text that is covid-related
function hideText(element) {

    // Hiding stroke line of the button
    document.getElementById("button-stroke").style.display = 'none';

    if (element.hasChildNodes()) {
        element.childNodes.forEach(hideText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(/covid-19|coronavirus|koronavir|pendem|corona/gi)) {
            element.parentElement.remove();
        }
    }
}

function changeArticlesDisplay() {
    // if statment here

    hideText(document.body);
}

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


document.getElementById("floating-btn-switch").addEventListener("click", changeArticlesDisplay);
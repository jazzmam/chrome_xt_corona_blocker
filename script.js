replaceText(document.body);

// Hiding text that is covid-related
function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(/covid-19|coronavirus|koronavir|pendem|corona/gi)) {
            element.parentElement.remove();
        }
    }
}

// Floating button
let divButton = document.createElement("div");
divButton.classList.add('floating-btn-switch');
divButton.id = "floating-btn-switch";

// Image inside the floating button
let img = document.createElement("img");
img.src = 'https://londonvetspecialists.vet/wp-content/uploads/2020/04/covid-icon.png';



document.body.appendChild(divButton);
divButton.appendChild(img);
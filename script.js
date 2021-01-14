replaceText(document.body);

// Hiding text that is covid-related
function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(/covid-19|coronavirus|koronavir|corona/gi)) {
            element.parentElement.remove();
        }
    }
}

// Floating button
let div = document.createElement("div");
div.classList.add('floating-btn-switch');
div.id = "floating-btn-switch";

let img = document.createElement("img");
img.src = 'https://i.pinimg.com/originals/f0/e1/8a/f0e18a5eec5f034b4bf92ea25ccc7d48.png';

document.body.appendChild(div);
div.appendChild(img);
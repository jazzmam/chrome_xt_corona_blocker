replaceText(document.body);

// Hiding text that is covid-related
function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(/covid-19|coronavirus|koronavir|corona/gi)) {
            element.parentElement.remove();
        }
        /*element.textContent = element.textContent.replace(/covid-19|coronavirus|koronavir|corona/gi, 'TEXT')*/
    }
}

// Floating button
let div = document.createElement("div");
div.classList.add('floating-btn-switch');
div.id = "floating-btn-switch";

let i = document.createElement("i");
i.classList.add('fa', 'fa-plus');

document.body.appendChild(div);
div.appendChild(i);
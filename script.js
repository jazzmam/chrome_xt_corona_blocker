replaceText(document.body);

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
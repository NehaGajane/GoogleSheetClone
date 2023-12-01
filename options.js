const cellNamePlaceholder = document.querySelector('#active-cell');
let activeElement = null;
const fontSizeInput = document.querySelector('#fontsize');
const fontfamilyInput = document.querySelector('#fontfamily');
const form = document.querySelector('#form');


const state = {};

const defaultProperties = {
    fontfamily: 'sans',
    fontSize: 16,
    color: "#000000",
    textAlign: "left",
    backgroundColor: "#ffffff",
    isBold: false,
    isItalic: false,
    isUnderlined: false,
    value: ''
}

function onCellFocus(event) {
    const elementId = event.target.id;
    if(elementId === null) return;
    cellNamePlaceholder.innerText = elementId;
    activeElement = event.target;

    if(state[elementId]) {

        resetOptions(state[elementId]);
    }

    else {
        resetOptions(defaultProperties);
    }
}

function resetOptions(optionState) {
    form.fontfamily.value = optionState.fontfamily;
    form.fontsize.value = optionState.fontSize;
    form.align.value = optionState.textAlign;
    form.bold.checked = optionState.isBold;
    form.italic.checked = optionState.isItalic;
    form.underline.checked = optionState.isUnderlined;
    form.color.value = optionState.color;
    form.bgcolor.value = optionState.backgroundColor;
}

function onChangeFontSize() {

}

function call() {
    if(!activeElement) {
    alert("Please select a cell to make changes");
    form.reset();
    return;
    }

    let currentState = {
        color: form.color.value,
        backgroundColor: form.bgcolor.value,
        fontSize: form.fontsize.value,
        fontfamily: form.fontfamily.value,
        isBold: form.bold.checked,
        isItalic: form.italic.checked,
        isUnderlined: form.underline.checked,
        textAlign: form.align.value
    }
    applyCurrentState(currentState);
    state[activeElement.id] = {...currentState, value: activeElement.innerText};
}

function applyCurrentState(styleObject) {
    activeElement.style.fontSize = `${styleObject.fontSize}px`;
    activeElement.style.fontfamily = styleObject.fontfamily;
    activeElement.style.color = styleObject.color;
    activeElement.style.textAlign = styleObject.textAlign;
    activeElement.style.backgroundColor = styleObject.backgroundColor;

    activeElement.style.fontWeight = styleObject.isBold ? "bold" : "normal";
    activeElement.style.fontStyle = styleObject.isItalic ? "italic" : "normal";
    activeElement.style.textDecoration = styleObject.isUnderlined ? "underline" : "none";
}

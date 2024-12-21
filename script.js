const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

document.addEventListener("keydown", handleKeyboardInput);

keys.forEach(key => {
    key.addEventListener("click", calculate);
});

function calculate() {
    const buttonText = this.value;

    switch (buttonText) {
        case "ac":
            clearAll();
            break;

        case "del":
            deleteLast();
            break;

        case "=":
            evaluateExpression();
            break;

        default:
            appendToOutput(buttonText);
            break;
    }
}

function handleKeyboardInput(e) {
    const validKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", ".", "Enter", "Backspace"];
    if (validKeys.includes(e.key)) {
        switch (e.key) {
            case "Enter":
                evaluateExpression();
                break;

            case "Backspace":
                deleteLast();
                break;

            default:
                appendToOutput(e.key);
                break;
        }
    }
}

function clearAll() {
    output.innerText = "";
    result.innerText = "0";
    result.style.animation = "";
    output.style.animation = "";
}

function deleteLast() {
    output.textContent = output.textContent.slice(0, -1);
}

function evaluateExpression() {
    try {
        result.innerText = eval(output.innerText) || "0";
        result.style.animation = "big 0.5s ease-in-out";
        output.style.animation = "small 0.5s ease-in-out";
        result.style.animationFillMode = "forwards";
        output.style.animationFillMode = "forwards";
    } catch (e) {
        result.innerText = "Error";
    }
}

function appendToOutput(value) {
    if (result.innerText !== "0" && !isNaN(value)) {
        clearAll();
    }
    output.textContent += value;
}

function add(num1, num2) {
    return +num1 + +num2;
}

function sub(num1, num2) {
    return +num1 - +num2;
}

function mul(num1, num2) {
    return +num1 * +num2;
}

function div(num1, num2) {
    return +num1 / +num2;
}

function operate(operator, num1, num2) {
    return operator(num1, num2);
}

const allButtons = document.querySelectorAll("button");
const display = document.querySelector(".display");

allButtons.forEach(button => button.addEventListener("click", () => {
    display.textContent = button.id;
}));

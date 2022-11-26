function add([num1, num2]) {
    return +num1 + +num2;
}

function sub([num1, num2]) {
    return +num1 - +num2;
}

function mul([num1, num2]) {
    return +num1 * +num2;
}

function div([num1, num2]) {
    return +num1 / +num2;
}

function operate(operator, [num1, num2]) {
    return operator([num1, num2]);
}

const allButtons = document.querySelectorAll("button");
const display = document.querySelector(".display");




let numString = "";
let numArray = [];
let operator;
allButtons.forEach(button => button.addEventListener("click", () => {
        display.textContent = buttonLogic(button);
}));

function buttonLogic(button) {
    const isOperator = button.parentElement?.classList.contains("operator");
    const isEqual    = button.parentElement?.classList.contains("equal");
    if (button.id === "clear") {
        numString = "";
        numArray = [];
    } else {
        if (!isOperator && !isEqual) {
            numString = numString + button.id;
        } else if (isOperator) {
            numArray.push(numString);
            numString = "";
            operator =  button.id == "+" ? add : 
                        button.id == "-" ? sub :
                        button.id == "*" ? mul :
                        button.id == "/" ? div : "error";
        } else if (isEqual) {
            numArray.push(numString);
            return `Result: ${operate(operator, numArray)}`;
        }
    }
    return numString;
}


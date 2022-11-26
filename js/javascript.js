function add(numArray) {
    return +numArray[0] + +numArray[1];
}

function sub(numArray) {
    return +numArray[0] - +numArray[1];
}

function mul(numArray) {
    return +numArray[0] * +numArray[1];
}

function div(numArray) {
    return +numArray[0] / +numArray[1];
}

function operate(operator, numArray) {
    return Math.round(operator(numArray) * 1000) / 1000;
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
            if (!!numArray[1]) {
                numArray = [operate(operator, numArray)];
            }
            numString = "";
            operator =  button.id == "+" ? add : 
                        button.id == "-" ? sub :
                        button.id == "*" ? mul :
                        button.id == "/" ? div : "error";
        } else if (isEqual) {
            temp = numArray
            temp.push(numString);
            numArray = [operate(operator, temp)];
            numString = "";
            return operate(operator, temp);
        }

        
    }
    return numString;
}



// wenn array[1] dann soll operator auf array [0] und array [1] und in array [0] gespeichert werden, array [1] wird freigegeben und ist damit false 
function add(a, b) {
    result = a + b;
    return result;
}
function subtract(a, b) {
    result = a - b;
    return result;
}
function multiply(a, b) {
    result = a * b;
    return result;
}
function divide(a, b) {
    result = a / b;
    return result;
}
function operate(operator, a, b) {
    return (operator === '+' ? add(a, b) :
        operator === '-' ? subtract(a, b) :
            operator === '*' ? multiply(a, b) :
                operator === '/' ? divide(a, b) : false);
}
// console.log(operate('/', 2, 3));

// Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.
digitArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
operatorArray = ['+', '-', 'x', '.', '=', '+/-', '÷', '⌫','AC'];

function clickButton() {
    buttonChoice = this.textContent;
    buttonChoiceInt = parseInt(buttonChoice);
    if (digitArray.includes(buttonChoiceInt) || buttonChoice === '.') {
        console.log('in digit array or decimal');
        //append to display div and store full display number in variable
    }
    if (operatorArray.includes(buttonChoice)) {
        console.log('in operator array');
    }
    console.log(this.textContent);
    
}

let buttons = document.querySelectorAll('.btn');
// console.log(buttons);
buttons.forEach(button => button.addEventListener('click', clickButton));


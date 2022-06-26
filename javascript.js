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
            operator === 'x' ? multiply(a, b) :
                operator === '÷' ? divide(a, b) : false);
}
// console.log(operate('/', 2, 3));

// Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.
let digitArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let operatorArray = ['+', '-', 'x', '=', '+/-', '÷'];
let displayString = '0';
let operand1 = '';
let operand2 = '';
let operator1 = '';
// let operator2 = '';
let display = document.getElementById('display');
display.textContent = displayString;

function clickButton() {
    let buttonChoice = this.textContent;

    //if button clicked is a number:
    if (digitArray.includes(buttonChoice)) {
        console.log(displayString);

        if (displayString === '0' && buttonChoice === '0') {
            displayString = '0';
            display.textContent = displayString;
            console.log(displayString);
            console.log('stop adding zeros!');
        } //only display 0 at beginning of string if next char is a decimal

        else if (buttonChoice == '.' && displayString.includes('.')) {
            //only one decimal per string
        }
        else if (displayString === '0') { displayString = buttonChoice }
        else { displayString = displayString + buttonChoice }
        console.log('displayString: ' + displayString);
        display.textContent = displayString;

    }
    //if button clicked is an operator:
    if (operatorArray.includes(buttonChoice)) {
        console.log('that\'s an operator');
        if (operand1 == '') {
            console.log('filling operand1...')
            operand1 = parseFloat(displayString);
            operator1 = buttonChoice;
            console.log('operand1: ' + operand1 + ' operator1: ' + operator1);
            displayString = '';
        }
        else if (operand2 == '' && displayString != '') {
            console.log('filling operand2...');
            operand2 = parseFloat(displayString);
            console.log('operand2: ' + operand2 + ' buttonChoice: ' + buttonChoice);
            //STILL NOT GETTING RIGHT OPERATOR IN OPERATOR 1 AFTER THE USE OF '='
            if (operator1 === '') { operator1 = buttonChoice }
            operationResult = operate(operator1, operand1, operand2);
            console.log(operationResult);
            operand1 = operationResult;
            operand2 = '';
            console.log('operand2: ' + operand2 + ' buttonChoice: ' + buttonChoice);

            if (buttonChoice != '=') {
                operator1 = buttonChoice;
                console.log('operator1 after operation of +,-,x, or /: ' + operator1);
            } else { operator1 = '' };
            console.log('operator1 after operation of "=": ' + operator1);
            display.textContent = operationResult;
            displayString = '';
        }

    } if (buttonChoice == 'AC') {
        operand1 = '';
        operand2 = '';
        operator1 = '';
        // operator2 = '';
        displayString = '';
        display.textContent = '0';
    }
}

let buttons = document.querySelectorAll('.btn');
// console.log(buttons);
buttons.forEach(button => button.addEventListener('click', clickButton));


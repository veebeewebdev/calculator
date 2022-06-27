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

let digitArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let operatorArray = ['+', '-', 'x', '=', '+/-', '÷'];
let displayString = '0';
let operand1 = '';
let operand2 = '';
let operator = '';
let display = document.getElementById('display');
let previousOperator = ''
display.textContent = displayString;

function clickButton() {
    let buttonChoice = this.textContent;
    if (digitArray.includes(buttonChoice)) {
        if (previousOperator == '=') {
            operand1 = '';
            previousOperator = '';
        }
        if (buttonChoice == '.' && displayString.includes('.')) { }
        else if (buttonChoice == '.' && displayString == '') displayString = '0.' 
        else if (displayString === '0' && buttonChoice != '.') displayString = buttonChoice
        else if (displayString.length > 9) { }
        else { displayString = displayString + buttonChoice }
        display.textContent = displayString;
    }
    if (operatorArray.includes(buttonChoice)) {
        if (buttonChoice != '=' && operator == '') {
            operator = buttonChoice;
        }
        if (operand1 == '') {
            operand1 = parseFloat(displayString);
            displayString = '';
        }
        else if (operand2 == '' && displayString != '' && operator != '') {
            operand2 = parseFloat(displayString);
            operationResult = operate(operator, operand1, operand2);
            if (operationResult.length > 10) {
                //find the decimal and round so totalchar >=10
                let decimalPosition = operationResult.indexOf('.');
            }
            if (buttonChoice === '=') {
                operator = '';
                previousOperator = '=';
            } else operator = buttonChoice;

            operand1 = operationResult;
            operand2 = '';
            display.textContent = operationResult;
            displayString = '';
        }

    } if (buttonChoice == 'AC') {
        operand1 = '';
        operand2 = '';
        operator = '';
        displayString = '';
        display.textContent = '0';
        console.log('all clear');
    }
}

let buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', clickButton));


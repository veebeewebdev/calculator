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
console.log(operate('/', 2, 3));
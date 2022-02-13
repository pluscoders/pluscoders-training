/**
 * Calculates the result of an operation over two given numbers.
 *
 * @example
 *      calculate(1, '+', 2)
 *      3
 *
 * @param {number} operand1 The first number of the operation.
 * @param {string} operation The operation to execute (addition '+', subtraction '-', multiplication 'x', division '/').
 * @param {number} operand2 The second number of the operation.
 * 
 * @returns {number} The result of the operation, once applied with the two numbers.
 */
function calculate(operand1, symbol, operand2) {
    //debugger
    if (symbol === '+') {
        return operand1 + operand2
    } else if (symbol === '-') {
        return operand1 - operand2
    } else if (symbol === '*') {
        return operand1 * operand2
    } else if (symbol === '/') {
        return operand1 / operand2
    }
} 
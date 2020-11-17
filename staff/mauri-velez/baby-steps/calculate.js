// // /**
// //  * Calculates the result of an operation over two given numbers.
// //  *
// //  * @example
// //  *      calculate(1, '+', 2)
// //  *      3
// //  *
// //  * @param {number} operand1 The first number of the operation.
// //  * @param {string} operation The operation to execute (addition '+', subtraction '-', multiplication 'x', division '/').
// //  * @param {number} operand2 The second number of the operation.
// //  * 
// //  * @returns {number} The result of the operation, once applied with the two numbers.
// //  */
// //function calculate(number1, operation, number2) {
//     // TODO implement me


function calculate(a, operador, b){
    if (operador === '+') 
       return a +b;
    else if(operador === '-') 
       return (a-b);
    else if(operador === '*') 
       return (a*b);
    else if(operador === '/') 
       return (a/b);
}

calculate()


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
// //}//

// const sumar = (num1,num2) =>{
//     return parseInt(num1) + parseInt(num2);

// }
// const restar = (num1,num2) =>{
//     return parseInt(num1) - parseInt(num2);

// }

// const multiplicar = (num1,num2) =>{
//     return parseInt(num1) *  parseInt(num2);
// }

// const dividir = (num1,num2) =>{
//     return parseInt(num1) / parseInt(num2);
// }


// alert("Hola Somos una calculadora online, presione ACEPTAR para Operar");
// let operacion = prompt("Define un numero para definir el tipo de operacion a realizar y presiona ACEPTAR:  1 = Sumar; 2 = Restar;  3 = Multiplicar;  4 = Dividir");

// if (operacion == 1){
//     let num1 = prompt("Ingresa el Primer Numero a Calcular");
//     let num2 = prompt("Ingresa el Segundo Numero a Calcular")   
//     resultado = sumar(num1,num2);
//        alert(`tu resultado de la suma es ${resultado}`)
        
// }
// else if (operacion == 2){
//     let num1 = prompt("Ingresa el primer numero a calcular");
//     let num2 = prompt("Ingresa el segundo numero a calcular")   
//     resultado = restar(num1,num2);
//        alert(`tu resultado de la resta es ${resultado}`)

// }

// else if (operacion == 3){
//     let num1 = prompt("Ingresa el primer numero a calcular");
//     let num2 = prompt("Ingresa el segundo numero a calcular")   
//     resultado = multiplicar(num1,num2);
//        alert(`tu resultado de la multiplicacion es ${resultado}`)

// }

// else if (operacion == 4){
//     let num1 = prompt("Ingresa el primer numero a calcular");
//     let num2 = prompt("Ingresa el segundo numero a calcular")   
//     resultado = dividir(num1,num2);
//        alert(`tu resultado de la division es ${resultado}`)

// }

// else {
//     alert("ha ingresa un operador erroneo, presione ENTER y vuelva a definir operador");
// }

// const sumar = (a,b) => {
//     return parseInt(a) + parseInt(b)};
// const restar = (a,b) => {
//     return parseInt(a) - parseInt(b)};
// const multiplicar = (a,b) => {
//     return parseInt(a) * parseInt(b)};
// const dividir = (a,b) => {
//     return parseInt(a) / parseInt(b)};
// const operacion = prompt("selecciones operacion: sumar, restar, multiplicar, dividir");
// const a = prompt("Ingrese Primer Numero a Calcular");
// const b = prompt("Ingrese Segundo Numero a Calcular");
// if (operacion === "sumar") {
//     alert(sumar(a,b))
// } else if (operacion === "restar") {
//     alert(restar(a,b))
// } else if (operacion === "multiplicar"){
//     alert(multiplicar(a,b))
// } else if (operacion === "dividir"){
//     alert (dividir(a,b))
// } else {alert("Operacion Desconocida")}   

// const sumar = (a,b) => {
//     return parseInt(a) + parseInt(b)};
// const restar = (a,b) => {
//     return parseInt(a) - parseInt(b)};
// const multiplicar = (a,b) => {
//     return parseInt(a) * parseInt(b)};
// const dividir = (a,b) => {
//     return parseInt(a) / parseInt(b)};
// const operacion = console.log("selecciones operacion: sumar, restar, multiplicar, dividir");
// const a = console.log("Ingrese Primer Numero a Calcular");
// const b = console.log("Ingrese Segundo Numero a Calcular");
// if (operacion === "sumar") {
//     console.log(sumar(a,b))
// } else if (operacion === "restar") {
//     console.log(restar(a,b))
// } else if (operacion === "multiplicar"){
//     console.log(multiplicar(a,b))
// } else if (operacion === "dividir"){
//     console.log (dividir(a,b))
// } else {console.log("Operacion Desconocida")}

function calculate(a, operador, b){
    if (operador === '+') 
    return a +b;
    else if(operador === '-') 
    return (a-b);
    else if(operador === '*') 
    return (a*b);
    else if(operador === '/') return (a/b);
}

calculate()


function calculate(a, operador, b) {
    if (operador === '+')
        return a + b;
    else if (operador === '-')
        return a - b;
    else if (operador === '*')
        return a * b;
    else if (operador === '/')
        return a / b;
}
calculate()
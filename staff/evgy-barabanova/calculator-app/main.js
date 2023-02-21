// create a reference called 'display' and set it to point to the display html element
var display = document.querySelector('.display')

var buttons = document.querySelectorAll('button')

var mem = '', aux

var operation

// create a reference called 'button7' and set it to the first item of the array of button html elements
var button7 = buttons[0]

// set the property 'onclick' to point to the function that processes the number 7
// assign the click behavior to the button for number 7
button7.onclick = function () {
    // set the reference 'mem' to point to a new value that is the addition of its previous value and 7
    // accumulate the value in this memory
    mem = mem + 7

    // set the property 'innerText' to point to the new value of the reference mem
    // update the display
    display.innerText = mem
}

var button8 = buttons[1]

button8.onclick = function () {
    mem = mem + 8

    display.innerText = mem
}

var button9 = buttons[2]

button9.onclick = function () {
    mem = mem + 9

    display.innerText = mem
}

var buttonDiv = buttons[3]

buttonDiv.onclick = function () {
    aux = mem

    mem = ''

    operation = '/'
}

var button4 = buttons[4]

button4.onclick = function () {
    mem = mem + 4

    display.innerText = mem
}

var button5 = buttons[5]

button5.onclick = function () {
    mem = mem + 5

    display.innerText = mem
}

var button6 = buttons[6]

button6.onclick = function () {
    mem = mem + 6

    display.innerText = mem
}

var buttonMul = buttons[7]

buttonMul.onclick = function () {
    aux = mem

    mem = ''

    operation = '*'
}

var button1 = buttons[8]

button1.onclick = function () {
    mem = mem + 1

    display.innerText = mem
}

var button2 = buttons[9]

button2.onclick = function () {
    mem = mem + 2

    display.innerText = mem
}

var button3 = buttons[10]

button3.onclick = function () {
    mem = mem + 3

    display.innerText = mem
}

var buttonSub = buttons[11]

buttonSub.onclick = function () {
    aux = mem

    mem = ''

    operation = '-'
}

var buttonC = buttons[12]

buttonC.onclick = function () {
    mem = ''

    display.innerText = mem
}

var button0 = buttons[13]

button0.onclick = function () {
    mem = mem + 0

    display.innerText = mem
}

var buttonDot = buttons[14]

buttonDot.onclick = function () {
    mem = mem + '.'

    display.innerText = mem
}

var buttonAdd = buttons[15]

buttonAdd.onclick = function () {
    aux = mem

    mem = ''

    operation = '+'
}

var buttonEqual = buttons[16]

buttonEqual.onclick = function () {
    var result = calculate(Number(aux), operation, Number(mem))

    mem = ''

    display.innerText = result
}

/*agregar un elemento al final del array
buscar el ultimos elemento + 1 y agregar el valor 
*/

function push(array, value) {

    array[array.length] = value

    return array.length
}

// tests

// case 1

var animals = ["pigs", "goats", "sheep", "cows"]
console.log(push(animals, 'chickens'))
console.log(animals)
//Array ["pigs", "goats", "sheep", "cows", "chickens"]

// case 2

var letters = ['a', 'b', 'c', 'd', 'e']
console.log(push(letters, 'f'))
console.log(letters)
//result letters = ['a','b','c','d','e','f']



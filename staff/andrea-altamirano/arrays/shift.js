/*
reemplazar el elemento ubicado en 0 por el siguiente y asi sucesivamente
for para ir pasando por los elementos
animals = ["pigs", "goats", "sheep", "cows"]
animals = ["goats","goats", "sheep", "cows"]
animals = ["goats","sheep", "sheep", "cows"]
animals = ["goats","sheep", "cows", "cows"]
Eliminar el ultimo elemento del array acortando la length
*/
function shift(array) {
    var first = array[0]

    for (var i = 1; i < array.length; i++)
        array[i - 1] = array[i]

    array.length = array.length - 1

    return first
}


// tests

// case 1

var animals = ["pigs", "goats", "sheep", "cows"]
console.log(shift(animals))
// pigs
console.log(animals)
// ["goats", "sheep", "cows"]

// case 2

var names = ['Josefina', 'Lucia', 'Mateo', 'Marta']
console.log(shift(names))
// Josefina
console.log(names)
// ['Lucia', 'Mateo','Marta']

// case 3

var numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
console.log(shift(numbers))
// one
console.log(numbers)
// ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

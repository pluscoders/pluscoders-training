function includes(array, value) {
    // TODO
    /*
    -for  para ir pasando por el array
    -comprobar si esa parte del array es igual a value
    - si es true return true
     -si es false return false
    */
    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        if (element === value) return true
    }

    return false
}

// tests

const array1 = [1, 2, 3];

console.log(includes(array1, 2))
//  true

const pets = ['cat', 'dog', 'bat']

console.log(includes(pets, 'cat'))
// true

console.log(includes(pets, 'lion'))
// false
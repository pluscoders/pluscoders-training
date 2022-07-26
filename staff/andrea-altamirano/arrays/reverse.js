function reverse(array) {
    // TODO
    /*
    -buscar el ultimo elemento del array
    - generar una variable donde se vaya acumulando los elementos del array
    - a esa variable la igualaria a array principal

    ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    aux = 'nine'
    ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'one']
    ['nine', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'one']
    aux = 'eight'
    ['nine', 'two', 'three', 'four', 'five', 'six', 'seven', 'two', 'one']
    ['nine', 'eight', 'three', 'four', 'five', 'six', 'seven', 'two', 'one']
    aux = 'seven'
    ['nine', 'eight', 'three', 'four', 'five', 'six', 'three', 'two', 'one']
    ['nine', 'eight', 'seven', 'four', 'five', 'six', 'three', 'two', 'one']
    aux = 'six'
    ['nine', 'eight', 'seven', 'four', 'five', 'four', 'three', 'two', 'one']
    ['nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
    return array
    */
    for (var i = array.length - 1; i > array.length / 2; i--) {
        var aux = array[i]

        array[i] = array[array.length - i - 1]

        array[array.length - i - 1] = aux
    }

    return array
}

// tests

const array1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

const reversed = reverse(array1)
console.log('reversed:', reversed);
// ['nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']

console.log(array1);
// ['nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
function stringToArray(text) {
    var array = []

    for (var i = 0; i < text.length; i++)
        array[i] = text[i]

    return array
}

// TESTS

// CASE text is "Hola Mundo"

var result = stringToArray('Hola Mundo')

console.assert(result instanceof Array, 'result should be an array')
console.assert(result[0], 'H')
console.assert(result[1], 'o')
console.assert(result[2], 'l')
console.assert(result[3], 'a')
console.assert(result[4], ' ')
console.assert(result[5], 'M')
console.assert(result[6], 'u')
console.assert(result[7], 'n')
console.assert(result[8], 'd')
console.assert(result[9], 'o')
console.assert(result.length === 10)

// CASE text is ""

var result = stringToArray('')
console.assert(result instanceof Array, 'result should be an array')
console.assert(result.length === 0)
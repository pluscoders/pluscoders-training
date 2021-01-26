function stringToArray(text) {
    if (typeof text !== 'string') throw new TypeError(text + ' is not a string')

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

// CASE text is not a string, but boolean true

var result

try {
    stringToArray(true)
} catch(error) {
    result = error
}

console.assert(result instanceof TypeError)
console.assert(result.message === 'true is not a string')

// CASE text is not a string, but number 10

var result

try {
    stringToArray(10)
} catch(error) {
    result = error
}

console.assert(result instanceof TypeError)
console.assert(result.message === '10 is not a string')

// CASE text is not a string, but an object

var result

try {
    stringToArray({})
} catch(error) {
    result = error
}

console.assert(result instanceof TypeError)
console.assert(result.message === '[object Object] is not a string')

// CASE text is not a string, but a function

var result

try {
    stringToArray(function() {})
} catch(error) {
    result = error
}

console.assert(result instanceof TypeError)
console.assert(result.message === 'function() {} is not a string')

// CASE text is not a string, but an array

var result

try {
    stringToArray([])
} catch(error) {
    result = error
}

console.assert(result instanceof TypeError)
console.assert(result.message === ' is not a string')
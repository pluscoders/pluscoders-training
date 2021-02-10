function map(array, callback) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (!(callback instanceof Function)) throw new TypeError(callback + ' is not a function')

    var result = []

    for (var i = 0; i < array.length; i++) {
        result[result.length] = callback(array[i])
    }

    return result
}

// TEST

    // Inputs: Array with random length + mirror of array + function called callback
    var length = Math.floor(Math.random() * 100)
    var array = []
    var mirror = []

    for (var i = 0; i < length; i++) {
        array[i] = Math.floor(Math.random() * 100)
        mirror[i] = array[i]
    }

    var multiplier = Math.floor(Math.random() * 100 * 1/2)

    function callback(element) {
        return element * multiplier
    }

    // Call to test
    var result = map(array, callback)
    // Comparation
    var otherResult = array.map(callback)
    
    // Results
    console.assert(result instanceof Array, 'result must be an array')
    console.assert(otherResult instanceof Array, 'result must be the same type of otherResult')
    console.assert(result.length === otherResult.length, 'result.length is no correct')
    
    for (var i = 0; i < result.length; i++)
        console.assert(result[i] === multiplier * array[i], 'result is no correct')
    
    for (var j = 0; j < result.length; j++)
        console.assert(array[j] === mirror[j], 'array was changed')
    
    console.assert(array.length === mirror.length, 'array.length was changed')
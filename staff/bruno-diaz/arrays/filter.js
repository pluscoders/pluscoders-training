function filter(array, callback) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (!(callback instanceof Function)) throw new TypeError(callback + ' is not a function')
    var result = []

    for (var i = 0; i < array.length; i++) {
        if (callback(array[i]))
            result[result.length] = array [i]
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

    var comparation = Math.floor(Math.random() * 100 * 1/2)

    function callback(element) {
        return element > comparation
    }
    function callbackComparation(element) {
        return element <= comparation
    }

    // Call to test
    var result = filter(array, callback)
    var comparationResult = filter(array, callbackComparation)
    // Comparation
    var otherResult = array.filter(callback)
    
    // Results
    console.assert(result instanceof Array, 'result must be an array')
    console.assert(otherResult instanceof Array, 'result must be the same type of otherResult')
    console.assert(result.length === otherResult.length, 'result.length is no correct')
    console.assert(result.length === array.length - comparationResult.length, 'result.length is no correct')
    
    for (var i = 0; i < result.length; i++)
        console.assert(result[i] > comparation, 'result is no correct')
    
    for (var j = 0; j < comparationResult.length; j++)
        console.assert(comparationResult[j] <= comparation, 'result is no correct')
    
    for (var k = 0; k < result.length; k++)
        console.assert(result[k] === otherResult[k], 'result is not the same than comparation array')
    
    for (var l = 0; l < result.length; l++)
        console.assert(array[l] === mirror[l], 'array was changed')
    
    console.assert(array.length === mirror.length, 'array.length was changed')
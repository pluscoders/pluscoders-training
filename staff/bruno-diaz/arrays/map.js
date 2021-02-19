//TODO Add optional params in call to fuction and tests

function map(array, callback) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (!(callback instanceof Function)) throw new TypeError(callback + ' is not a function')

    var result = []

    for (var i = 0; i < array.length; i++) {
        result[result.length] = callback(array[i], i, array)
    }

    return result
}

// TEST

    var length = Math.floor(Math.random() * 100)

    var array = []
    var mirror = []

    for (var i = 0; i < length; i++) {
        array[i] = Math.floor(Math.random() * 100)
        mirror[i] = array[i]
    }

    var result = []
    var arrays = []
    
    map(array, function(value, index, array) {
        result[index] = value
        arrays[index] = array
    })
    
    // Checks

    console.assert(result instanceof Array, 'result must be an array')

    console.assert(array.length === mirror.length, 'result.length is no correct')
    console.assert(result.length === array.length, 'result.length is no correct')
    console.assert(arrays.length === array.length, 'arrays.length was changed')
    
    for (var i = 0; i < result.length; i++) {
        console.assert(array[i] === mirror[i], 'array was changed')
        console.assert(result[i] === array[i], 'result is no correct')
    }
    
    for (var j = 0; j < result.length; j++)
        console.assert(arrays[j] === array, 'array was changed')
function pop(array) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    var result = []

    for (var i = 0; i < array.length - 1; i++)
        result[i] = array[i]

    return result
}

// TESTS

    // CASE array is []
        var result = pop([])

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 0, 'result.length is no correct')
        console.assert(result[0] === undefined, 'result is no correct')

    // CASE array is ["👋"]
        var result = pop(['👋'])

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 0, 'result.length is no correct')
        console.assert(result[0] === undefined, 'result is no correct')

    // CASE array is ['🥚', '🐣', '🐥', '🐓']
        var result = pop(['🥚', '🐣', '🐥', '🐓'])

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 3, 'result.length is no correct')
        console.assert(result[0] === '🥚', 'result is no correct')
        console.assert(result[1] === '🐣', 'result is no correct')
        console.assert(result[2] === '🐥', 'result is no correct')

    // CASE array is [0, 1, 2, 3, 4, 5, 6]
        var result = pop([0, 1, 2, 3, 4, 5, 6])

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 6, 'result.length is no correct')
        console.assert(result[0] === 0, 'result is no correct')
        console.assert(result[1] === 1, 'result is no correct')
        console.assert(result[2] === 2, 'result is no correct')
        console.assert(result[3] === 3, 'result is no correct')
        console.assert(result[4] === 4, 'result is no correct')
        console.assert(result[5] === 5, 'result is no correct')

        
// UNHAPPY RESULTS

    // CASE array is not an array, but string 'Hello, World!'
        var result

        try {
            pop('Hello, World!')
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'Hello, World! is not a array')

    // CASE array is not a array, but number 8028
        var result

        try {
            pop(8028)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '8028 is not a array')

    // CASE array is not a array, but boolean true
        var result

        try {
            pop(true)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'true is not a array')

    // CASE array is not a array, but an object
        var result

        try {
            pop({})
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '[object Object] is not a array')

    // CASE array is not a array, but a function
        var result

        try {
            pop(function() {})
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'function() {} is not a array')
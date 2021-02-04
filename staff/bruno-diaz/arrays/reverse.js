function reverse(array) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    var result = []
    var j = 0

    for (var i = array.length - 1; i > -1; i--) {
        result[j] = array[i]
        j++
    }

    return result
}

// TESTS

    // CASE array is []
        var result = reverse([])

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 0, 'result.length is no correct')
        console.assert(result[0] === undefined, 'result is no correct')

    // CASE array is ["👋"]
        var result = reverse(['👋'])

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 1, 'result.length is no correct')
        console.assert(result[0] === '👋', 'result is no correct')

    // CASE array is ['🥚', '🐣', '🐥', '🐓']
        var result = reverse(['🥚', '🐣', '🐥', '🐓'])

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 4, 'result.length is no correct')
        console.assert(result[0] === '🐓', 'result is no correct')
        console.assert(result[1] === '🐥', 'result is no correct')
        console.assert(result[2] === '🐣', 'result is no correct')
        console.assert(result[3] === '🥚', 'result is no correct')

    // CASE array is [0, 1, 2, 3, 4, 5, 6]
        var result = reverse([0, 1, 2, 3, 4, 5, 6])

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 7, 'result.length is no correct')
        console.assert(result[0] === 6, 'result is no correct')
        console.assert(result[1] === 5, 'result is no correct')
        console.assert(result[2] === 4, 'result is no correct')
        console.assert(result[3] === 3, 'result is no correct')
        console.assert(result[4] === 2, 'result is no correct')
        console.assert(result[5] === 1, 'result is no correct')
        console.assert(result[6] === 0, 'result is no correct')

        
// UNHAPPY RESULTS

    // CASE array is not an array, but string 'Hello, World!'
        var result

        try {
            reverse('Hello, World!')
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'Hello, World! is not a array')

    // CASE array is not a array, but number 8028
        var result

        try {
            reverse(8028)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '8028 is not a array')

    // CASE array is not a array, but boolean true
        var result

        try {
            reverse(true)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'true is not a array')

    // CASE array is not a array, but an object
        var result

        try {
            reverse({})
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '[object Object] is not a array')

    // CASE array is not a array, but a function
        var result
        
        try {
            reverse(function() {})
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'function() {} is not a array')
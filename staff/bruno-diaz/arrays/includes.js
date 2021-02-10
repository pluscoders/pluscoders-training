function includes (array, pattern, i) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (pattern === undefined || pattern === null) throw new TypeError('You have to put the pattern value')
    if (i && typeof i !== 'number') throw new TypeError(i + ' is not a number')

    if (!i) i = 0
    else if (i < 0) i += array.length
    var result = false

    for (i; i < array.length; i++) {
        if (array[i] === pattern) {
            result = true
            break
        }
    }

    return result
}


// TESTS

    // CASE array is [''] - pattern is '1' - no index
        var result = includes([''], '1')

        console.assert(typeof result === 'boolean', 'result must be a boolean')
        console.assert(result === false, 'result is no correct')

    // CASE array is ['😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎'] - patter is '' - no index
        var result = includes(['😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎'], '🤪')

        console.assert(typeof result === 'boolean', 'result must be a boolean')
        console.assert(result === true, 'result is no correct')

    // CASE array is ['😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎'] - patter is '' - index is 4
        var result = includes(['😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎'], '🤪', 4)

        console.assert(typeof result === 'boolean', 'result must be a boolean')
        console.assert(result === false, 'result is no correct')

    // CASE array is ['😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎'] - patter is '' - index is 4
        var result = includes(['😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎'], '🤪', -5)

        console.assert(typeof result === 'boolean', 'result must be a boolean')
        console.assert(result === true, 'result is no correct')

// UNHAPPY RESULTS

    // CASE array is not an array, but string 'Hello, World!'
        var result

        try {
            includes('Hello, World!', 0)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'Hello, World! is not an array')

    // CASE array is not a array, but number 8028
        var result

        try {
            includes(8028, 0)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '8028 is not an array')

    // CASE array is not a array, but boolean true
        var result
        
        try {
            includes(true, 0)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'true is not an array')

    // CASE array is not a array, but an object
        var result

        try {
            includes({}, 0)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '[object Object] is not an array')

    // CASE array is not a array, but a function
        var result
        
        try {
            includes(function() {}, 0)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'function() {} is not an array')

    // CASE index is not a number, but string 'Hello, World!'
        var result

        try {
            includes([], 0, 'Hello, World!')
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'Hello, World! is not a number')

    // CASE index is not a number, but boolean true
        var result

        try {
            includes([], 0, true)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'true is not a number')

    // CASE index is not a number, but an array
        var result

        try {
            includes([], 0, [])
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === ' is not a number')

    // CASE index is not a number, but an object
        var result

        try {
            includes([], 0, {})
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '[object Object] is not a number')

    // CASE index is not a number, but a function
        var result
        
        try {
            includes([], 0, function() {})
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'function() {} is not a number')
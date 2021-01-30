function repeat(text, count) {
    if (typeof text !== 'string') throw new TypeError(text + ' is not a string')
    if (typeof count !== 'number' && typeof count !== 'undefined') throw new TypeError(count + ' is not a number')
    
    var result = ""

    for(var i = 0; i < count; i++) {
        result += text
    }
    return result
}

// TESTS

    // CASE text is '' and number 10
        var result = repeat('', 10)

        console.assert(typeof result === 'string', 'result must be a string')
        console.assert(result.length === 0, 'result.length is no correct')
        console.assert(result === '', 'result is wrong')

    // CASE text is '👋' and number 3
        var result = repeat('👋', 3)

        console.assert(typeof result === 'string', 'result must be a string')
        console.assert(result.length === 6, 'result.length is no correct')
        console.assert(result === '👋👋👋', 'result is wrong')

    // CASE text is 'Hello!' and number 2
        var result = repeat('Hello!', 2)

        console.assert(typeof result === 'string', 'result must be a string')
        console.assert(result.length === 12, 'result.length is no correct')
        console.assert(result === 'Hello!Hello!', 'result is wrong')
        
    // CASE text is 'abc' and number 1
        var result = repeat('abc', 1)

        console.assert(typeof result === 'string', 'result must be a string')
        console.assert(result.length === 3, 'result.length is no correct')
        console.assert(result === 'abc', 'result is wrong')
            
    // CASE text is 'make me disappear' and no number
        var result = repeat('make me disappear')

        console.assert(typeof result === 'string', 'result must be a string')
        console.assert(result.length === 0, 'result.length is no correct')
        console.assert(result === '', 'result is wrong')
        
// UNHAPPY RESULTS

    // CASE text is not a string, but number 8028

        var result
        try {
            repeat(8028, 3)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '8028 is not a string')

    // CASE text is not a string, but boolean

        var result
        try {
            repeat(true, 3)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'true is not a string')

    // CASE text is not a string, but array

        var result
        try {
            repeat([], 3)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === ' is not a string')

    // CASE text is not a string, but object

        var result
        try {
            repeat({}, 3)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '[object Object] is not a string')

    // CASE text is not a string, but function

        var result
        try {
            repeat(function() {}, 3)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'function() {} is not a string')
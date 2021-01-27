function countWords(text) {
    if (typeof text !== 'string') throw new TypeError(text + ' is not a string')

    var array = text.split(' ')
    for (var i = 0; i < array.length; i++){
        if (array[i] === '') {
            array.splice(i, 1)
            i--
        }
    }
    return array
}

// TESTS

    // CASE text is "    "
        var result = countWords('    ')

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 0, 'result.length is no correct')

    // CASE text is "👋"
        var result = countWords('👋')

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 1, 'result.length is no correct')
        console.assert(result[0], '👋')

    // CASE text is "Hello World"
        var result = countWords('Hello World')

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 2, 'result.length is no correct')
        console.assert(result[0], 'Hello')
        console.assert(result[1], 'World')

    // CASE text is "I was born from an 🥚"
        var result = countWords('I was born from an 🥚')

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 6, 'result.length is no correct')
        console.assert(result[0], 'I')
        console.assert(result[1], 'was')
        console.assert(result[2], 'born')
        console.assert(result[3], 'from')
        console.assert(result[4], 'an')
        console.assert(result[5], '🥚')

    // CASE text is "I saw the light a few days later 🐣"
        var result = countWords('I saw the light a few days later 🐣')

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 9, 'result.length is no correct')
        console.assert(result[0], 'I')
        console.assert(result[1], 'saw')
        console.assert(result[2], 'the')
        console.assert(result[3], 'light')
        console.assert(result[4], 'a')
        console.assert(result[5], 'few')
        console.assert(result[6], 'days')
        console.assert(result[7], 'later')
        console.assert(result[8], '🐣')

    // CASE text is "  Hello  World,  I  just  arrived  !"
        var result = countWords('  Hello  World,  I  just  arrived  !')

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 6, 'result.length is no correct')
        console.assert(result[0], 'Hello')
        console.assert(result[1], 'World,')
        console.assert(result[2], 'I')
        console.assert(result[3], 'just')
        console.assert(result[4], 'arrived')
        console.assert(result[5], '!')

        
// UNHAPPY RESULTS

    // CASE text is not a string, but number 8028

        var result
        try {
            countWords(8028)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '8028 is not a string')

    // CASE text is not a string, but boolean true

        var result
        try {
            countWords(true)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'true is not a string')

    // CASE text is not a string, but an array

        var result
        try {
            countWords([])
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === ' is not a string')

    // CASE text is not a string, but an object

        var result
        try {
            countWords({})
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '[object Object] is not a string')

    // CASE text is not a string, but a function

        var result
        try {
            countWords(function() {})
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'function() {} is not a string')

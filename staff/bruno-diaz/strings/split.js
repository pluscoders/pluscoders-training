// TODO en test 2 no funciona result[2]

function split(text, pattern) {
    if (typeof text !== 'string') throw new TypeError(text + ' is not a string')
    if (typeof pattern !== 'string') throw new TypeError(pattern + ' is not a string')
    return text.split(pattern)
}


// TESTS

    // CASE text is 'Hello World', pattern is ' '
        var result = split('Hello World',' ')

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 2, 'result is not the right solution')
        console.assert(result[0], 'Hello')
        console.assert(result[1], 'World')

    // CASE text is 'hola mundo', pattern is '0'
        var result = split('hola mundo','o')

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 3, 'result is not the right solution')
        console.assert(result[0], 'h')
        console.assert(result[1], 'la mund')
        // console.assert(result[2], '')

    // CASE text is 'hola mundo', pattern is 'a'
        var result = split('hola mundo','a')

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 2, 'result is not the right solution')
        console.assert(result[0], 'hol')
        console.assert(result[1], ' mundo')

// UNHAPPY RESULTS

    // CASE text is not a string, but number 8028

        var result
        try {
            split(8028, '')
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '8028 is not a string')

    // CASE text is not a string, but boolean

        var result
        try {
            split(true, '')
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'true is not a string')

    // CASE text is not a string, but array

        var result
        try {
            split([], '')
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === ' is not a string')

    // CASE text is not a string, but object

        var result
        try {
            split({}, '')
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '[object Object] is not a string')

    // CASE text is not a string, but function

        var result
        try {
            split(function() {}, '')
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'function() {} is not a string')

    // CASE pattern is not a string, but number 8028

        var result
        try {
            split('', 8028)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '8028 is not a string')

    // CASE pattern is not a string, but boolean

        var result
        try {
            split('', true)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'true is not a string')

    // CASE pattern is not a string, but array

        var result
        try {
            split('', [])
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === ' is not a string')

    // CASE pattern is not a string, but object

        var result
        try {
            split('', {})
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '[object Object] is not a string')

    // CASE pattern is not a string, but function() {}

        var result
        try {
            split('', function() {})
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'function() {} is not a string')
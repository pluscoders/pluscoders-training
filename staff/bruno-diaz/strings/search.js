// TODO no usar indexOf

function search(text, search) {
    if (typeof text !== 'string') throw new TypeError(text + ' is not a string')
    if (typeof search !== 'string') throw new TypeError(search + ' is not a string')
    var verificador
    var letra = 0

    for (var j = 0; j < text.length; j++) {
        if (text[j] === search[letra] && (verificador && verificador === j - 1 || !verificador)) {
            verificador = j
            letra++
        } else {
            verificador = undefined
            letra = 0
        }
        if (letra === search.length) break
    }
    if (verificador) {
        verificador = verificador - search.length + 1
    } else {
        verificador = -1
    }
    return verificador
}


// TESTS

    // CASE text is '    ', search is '' ----------------------------------------------- No lo pasa
        var result = search('    ','')

        console.assert(typeof result === 'number', 'result must be a number')
        console.assert(result === 0, 'result is not the right solution')

    // CASE text is 'salute 👋 you', search is '👋'
        var result = search('salute 👋 you','👋')

        console.assert(typeof result === 'number', 'result must be a number')
        console.assert(result === 7, 'result is not the right solution')

    // CASE text is 'Hello, World!', search is 'World'
        var result = search('Hello, World!','World')

        console.assert(typeof result === 'number', 'result must be a number')
        console.assert(result === 7, 'result is not the right solution')

    // CASE text is 'Hello, World!', search is 'ello'
        var result = search('Hello, World!','ello')

        console.assert(typeof result === 'number', 'result must be a number')
        console.assert(result === 1, 'result is not the right solution')

    // CASE text is 'Hello, World!', search is 'orld'
        var result = search('Hello, World!','orld')

        console.assert(typeof result === 'number', 'result must be a number')
        console.assert(result === 8, 'result is not the right solution')

    // CASE text is 'Hello, World!', search is ','
        var result = search('Hello, World!',',')

        console.assert(typeof result === 'number', 'result must be a number')
        console.assert(result === 5, 'result is not the right solution')

    // CASE text is 'Hello, World!', search is '!'
        var result = search('Hello, World!','!')

        console.assert(typeof result === 'number', 'result must be a number')
        console.assert(result === 12, 'result is not the right solution')

    // CASE text is 'Hello, World!', search is 'What?'
        var result = search('Hello, World!','What?')

        console.assert(typeof result === 'number', 'result must be a number')
        console.assert(result === -1, 'result is not the right solution')

    // CASE text is 'Hello, World!', search is 'Hola'
        var result = search('Hello, World!','Hola')

        console.assert(typeof result === 'number', 'result must be a number')
        console.assert(result === -1, 'result is not the right solution')

    // CASE text is '123🅰️🅱️', search is '🅰️'
        var result = search('123🅰️🅱️','🅰️')

        console.assert(typeof result === 'number', 'result must be a number')
        console.assert(result === 3, 'result is not the right solution')

    // CASE text is 'abcABC', search is 'abc'
        var result = search('abcABC','abc')

        console.assert(typeof result === 'number', 'result must be a number')
        console.assert(result === 0, 'result is not the right solution')
    
    // CASE text is 'abcABC', search is 'ABC'
        var result = search('abcABC','ABC')

        console.assert(typeof result === 'number', 'result must be a number')
        console.assert(result === 3, 'result is not the right solution')

// UNHAPPY RESULTS

    // CASE text is not a string, but number 8028
        var result
        try {
            search(8028, '')
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '8028 is not a string')

    // CASE text is not a string, but boolean
        var result
        try {
            search(true, '')
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'true is not a string')

    // CASE text is not a string, but array
        var result
        try {
            search([], '')
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === ' is not a string')

    // CASE text is not a string, but object
        var result
        try {
            search({}, '')
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '[object Object] is not a string')

    // CASE text is not a string, but function
        var result
        try {
            search(function() {}, '')
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'function() {} is not a string')

    // CASE search is not a string, but number 8028
        var result
        try {
            search('', 8028)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '8028 is not a string')

    // CASE text is not a string, but boolean
        var result
        try {
            search('', true)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'true is not a string')

    // CASE text is not a string, but array
        var result
        try {
            search('', [])
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === ' is not a string')

    // CASE text is not a string, but object
        var result
        try {
            search('', {})
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '[object Object] is not a string')

    // CASE text is not a string, but function() {}
        var result
        try {
            search('', function() {})
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'function() {} is not a string')


// ------------------------------------------------------------------------------------------------------------ VERSION 1

// TODO no usar indexOf

function search(text, search) {
    if (typeof text !== 'string') throw new TypeError(text + ' is not a string')
    if (typeof search !== 'string') throw new TypeError(search + ' is not a string')
    return text.indexOf(search)
}
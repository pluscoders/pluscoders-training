function longestWords(text) {
    if (typeof text !== 'string') throw new TypeError(text + ' is not a string')
    var array = text.replaceAll(/[.,¿?¡!0-9]+/g, '').trim().split(' ')
    var i = 0
    var result = [array[i]]

    for (var j = 1; j < array.length; j++) {
        if (array[i].length === array[j].length) {
            result.push(array[j])
            i = j
        } else if (array[i].length < array[j].length) {
            while(result.length > 0)
                result.pop();
            result = []
            result.push(array[j])
            i = j
        }
    }
    return result
}


// TESTS

    // CASE text is ''
        var result = longestWords('')

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 1, 'result is not the right solution')
        console.assert(result[0] === '')

    // CASE text is '👋'
        var result = longestWords('👋')

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 1, 'result is not the right solution')
        console.assert(result[0] === '👋')

    // CASE text is 'Hello, World!'
        var result = longestWords('Hello, World!')

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 2, 'result is not the right solution')
        console.assert(result[0] === 'Hello')
        console.assert(result[1] === 'World')

    // CASE text is 'How old are you?'
        var result = longestWords('How old are you?')

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 4, 'result is not the right solution')
        console.assert(result[0] === 'How')
        console.assert(result[1] === 'old')
        console.assert(result[2] === 'are')
        console.assert(result[3] === 'you')

    // CASE text is 'I like eating icecream on the beach :)'
        var result = longestWords('I like eating icecream on the beach :)')

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 1, 'result is not the right solution')
        console.assert(result[0] === 'icecream')
    
    // CASE text is 'zero, one, two, three, four, five, six, seven, eight, nine, ten, ...'
        var result = longestWords('zero, one, two, three, four, five, six, seven, eight, nine, ten, ...')

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 3, 'result is not the right solution')
        console.assert(result[0] === 'three')
        console.assert(result[1] === 'seven')
        console.assert(result[2] === 'eight')

// UNHAPPY RESULTS

    // CASE text is not a string, but number 8028

        var result
        try {
            longestWords(8028)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '8028 is not a string')

    // CASE text is not a string, but boolean

        var result
        try {
            longestWords(true)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'true is not a string')

    // CASE text is not a string, but array

        var result
        try {
            longestWords([])
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === ' is not a string')

    // CASE text is not a string, but object

        var result
        try {
            longestWords({})
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '[object Object] is not a string')

    // CASE text is not a string, but function

        var result
        try {
            longestWords(function() {})
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'function() {} is not a string')


// ------------------------------------------------------------------------------------------------------------ VERSION 1

// TODO cómo se resetear un array

function longestWords1(text) {
    if (typeof text !== 'string') throw new TypeError(text + ' is not a string')
    var array = text.replaceAll(/[.,¿?¡!0-9]+/g, '').trim().split(' ')
    var i = 0
    var result = [array[i]]

    for (var j = 1; j < array.length; j++) {
        if (array[i].length === array[j].length) {
            result.push(array[j])
            i = j
        } else if (array[i].length < array[j].length) {
            // TODO Mirar cómo resetear un array
            result = []
            result.push(array[j])
            i = j
        }
    }
    return result
}
// Testear para verificar que recibo un número con el número de palabras
// DONE RTFM trim() - Recorta los espacios en blanco al comienzo y al final
// TODO nueva versión sin alterar un iterador (i--)

function countWords(text) {
    if (typeof text !== 'string') throw new TypeError(text + ' is not a string')

    var array = text.split(' ')
    for (var i = 0; i < array.length; i++){
        if (array[i] === '') {
            array.splice(i, 1)
            i--
        }
    }

    return array.length
}

// TESTS

    // CASE text is "    "
        var result = countWords('    ')

        console.assert(typeof result === 'number', 'result must be a number')
        console.assert(result === 0, 'result.length is no correct')

    // CASE text is "👋"
        var result = countWords('👋')

        console.assert(typeof result === 'number', 'result must be an number')
        console.assert(result === 1, 'result.length is no correct')

    // CASE text is "Hello World"
        var result = countWords('Hello World')

        console.assert(typeof result === 'number', 'result must be an number')
        console.assert(result === 2, 'result.length is no correct')

    // CASE text is "I was born from an 🥚"
        var result = countWords('I was born from an 🥚')

        console.assert(typeof result === 'number', 'result must be an number')
        console.assert(result === 6, 'result.length is no correct')

    // CASE text is "I saw the light a few days later 🐣"
        var result = countWords('I saw the light a few days later 🐣')

        console.assert(typeof result === 'number', 'result must be an number')
        console.assert(result === 9, 'result.length is no correct')

    // CASE text is "  Hello  World,  I  just  arrived  !"
        var result = countWords('  Hello  World,  I  just  arrived  !')

        console.assert(typeof result === 'number', 'result must be an number')
        console.assert(result === 6, 'result.length is no correct')

        
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

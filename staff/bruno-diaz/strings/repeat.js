// TOASK: Cómo testear la entrada de dos parámetro en una función
// TOASK: if (typeof count !== 'number' || typeof count !== 'undefined') --> no funciona

function repeat(text, count) {
    if (typeof text !== 'string') throw new TypeError(text + ' is not a string')
    if (typeof count !== 'number') throw new TypeError(count + ' is not a number')
    
    var result = ""

    for(var i = 0; i < count; i++) {
        result += text
    }
    return result
}

// TESTS

    // CASE text is "Hola Mundo"

        
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
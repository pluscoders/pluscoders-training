function stringToArray(text) {
    var arrayString = []
    if (typeof text === 'string') {
        if (!text) {
            return 'No hay texto; escribe un texto sobre el que trabajar'
        } else {
            for(var i = 0; i < text.length; i++) {
                arrayString[i] = text.charAt(i)
            }
        }
        return arrayString
    } else {
        return 'El texto introducido no tiene el formato correcto; recuerda escribir el texto entre comillas'
    }
}


// TESTS

    // CASE text is "Hola Mundo"

        var result = stringToArray('Hola Mundo')

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 10, 'result.length is no correct')
        console.assert(result[0], 'H')
        console.assert(result[1], 'o')
        console.assert(result[2], 'l')
        console.assert(result[3], 'a')
        console.assert(result[4], ' ')
        console.assert(result[5], 'M')
        console.assert(result[6], 'u')
        console.assert(result[7], 'n')
        console.assert(result[8], 'd')
        console.assert(result[9], 'o')
        console.assert(result[9], 'o')


    // CASE text is ""

        var result = stringToArray('')

        console.assert(result === 'No hay texto; escribe un texto sobre el que trabajar', 'result has bug with empty text')


    // CASE text is 08028

        var result = stringToArray(08028)

        console.assert(result === 'El texto introducido no tiene el formato correcto; recuerda escribir el texto entre comillas', 'result has bug with numbers')


    // CASE text is "08028"

        var result = stringToArray('08028')

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result[0], '0')
        console.assert(result[1], '8')
        console.assert(result[2], '0')
        console.assert(result[3], '2')
        console.assert(result[4], '8')
        console.assert(result.length === 5, 'result.length is no correct')
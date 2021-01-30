// TODO cómo manejar argumentos variables en JS
// TODO Revisar https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures para ver el porqué me sale que no es string y a la vez que sí
// TODO Rehacer sin ...restArgs --> https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/arguments

function concat(...strings) {
    var result = new String
    
    for (var i = 0; i < strings.length; i++) {
        var string = strings[i]
    }

    return result
}


// TESTS

    // CASE text is empty
        var result = concat('','')

        console.assert(typeof result === 'string', 'result must be a string')
        console.assert(result.length === 0, 'result.length is no correct')

    // CASE text is "👋", "😊", "🤙"
        var result = concat("👋", "😊", "🤙")

        console.assert(typeof result === 'string', 'result must be a string')
        console.assert(result.length === 3, 'result.length is no correct')
        console.assert(result[0], '👋')
        console.assert(result[1], '😊')
        console.assert(result[2], '🤙')

    // CASE text is ""Hola", ",", " ", "Mundo", "!""
        var result = concat("Hola", ",", " ", "Mundo", "!")

        console.assert(typeof result === 'string', 'result must be a string')
        console.assert(result.length === 12, 'result.length is no correct')
        console.assert(result[0], 'H')
        console.assert(result[1], 'o')
        console.assert(result[2], 'l')
        console.assert(result[3], 'a')
        console.assert(result[4], ',')
        console.assert(result[5], ' ')
        console.assert(result[6], 'M')
        console.assert(result[7], 'u')
        console.assert(result[8], 'n')
        console.assert(result[9], 'd')
        console.assert(result[10], 'o')
        console.assert(result[11], '!')



    // CASE text is ""

       


    // CASE text is 08028

       


    // CASE text is "08028"

      


    --> REVISAR
    new String("Hola mundo") instanceof String
        true
    "Hola Mundo" instanceof String
        false

    Función constructora -> Primitivos
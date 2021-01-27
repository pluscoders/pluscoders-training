// TODO cómo manejar argumentos variables en JS

function concat(...restArgs) {
    var result = ""
    
    for (var i = 0; i < restArgs.length; i++) {
        var string = restArgs[i].toString()
        for (var j = 0; j < string.length; j++) {
            result += string[j]
        }
    }
    result = result.toString()
    console.log(result instanceof Boolean)
    console.log(result instanceof String)
    console.log(result instanceof Number)
    console.log(result instanceof Array)
    console.log(result instanceof Object)
    console.log(result instanceof Function)
    console.log(typeof result)
    return result
}


// TESTS

    // CASE text is empty
        var result = concat('','')

        console.assert(result instanceof String, 'result must be a string')
        console.assert(result.length === 0, 'result.length is no correct')

    // CASE text is "👋", "😊", "🤙"
        var result = concat("👋", "😊", "🤙")

        console.assert(result instanceof String, 'result must be a string')
        console.assert(result.length === 3, 'result.length is no correct')
        console.assert(result[0], '👋')
        console.assert(result[1], '😊')
        console.assert(result[2], '🤙')

    // CASE text is ""Hola", ",", " ", "Mundo", "!""
        var result = concat("Hola", ",", " ", "Mundo", "!")

        console.assert(result instanceof String, 'result must be a string')
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

      
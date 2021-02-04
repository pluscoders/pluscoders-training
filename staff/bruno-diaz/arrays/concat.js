function concat() {
    var array = Array.from(arguments);
    var result = []
    var k = 0
    
    for (var i = 0; i < array.length; i++) {
        if (array[i] instanceof Array) {
            for (j = 0; j < array[i].length; j++) {
                result[k] = array[i][j]
                k++
            }
        } else {
            result[k] = array[i]
            k++
        }
    }

    return result
}

// TESTS

    // CASE array is [],[]
        var result = concat([],[])

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 0, 'result.length is no correct')
        console.assert(result[0] === undefined, 'result is no correct')

    // CASE array is ['👋'], ['🤙']
        var result = concat(['👋'], ['🤙'])

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 2, 'result.length is no correct')
        console.assert(result[0] === '👋', 'result is no correct')
        console.assert(result[1] === '🤙', 'result is no correct')

    // CASE array is ['👋', '🤙'], 13, 'Hello', true, { "one" : 1, "two" : 2 }, function () {}
        var result = concat(['👋', '🤙'], 13, 'Hello', true, { "one" : 1, "two" : 2 }, function () {})

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 7, 'result.length is no correct')
        console.assert(result[0] === '👋', 'result is no correct')
        console.assert(result[1] === '🤙', 'result is no correct')
        console.assert(result[2] === 13, 'result is no correct')
        console.assert(result[3] === 'Hello', 'result is no correct')
        console.assert(result[4] === true, 'result is no correct')
        // console.assert(result[5] === { "one" : 1, "two" : 2 }, 'result is no correct')
        // console.assert(result[6] === f () {}, 'result is no correct')
function concat() {
    Array.from(arguments)
    var result = []
    
    for (var i = 0; i < arguments.length; i++) {
        if (!(arguments[i] instanceof Array)) throw new TypeError(array + ' is not an array')

        var next = arguments[i]

        for (var j = 0; j < next.length; j++)
            result[result.length] = next[j]
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
        var result = concat(['👋', '🤙'], [13, 'Hello', true, { "one" : 1, "two" : 2 }, function () {}])

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 7, 'result.length is no correct')
        console.assert(result[0] === '👋', 'result is no correct')
        console.assert(result[1] === '🤙', 'result is no correct')
        console.assert(result[2] === 13, 'result is no correct')
        console.assert(result[3] === 'Hello', 'result is no correct')
        console.assert(result[4] === true, 'result is no correct')
        console.assert(result[5].one === 1, 'result is no correct')
        console.assert(result[5].two === 2, 'result is no correct')
        console.assert(result[6].toString() === 'function () {}', 'result is no correct')
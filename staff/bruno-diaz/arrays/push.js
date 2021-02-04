function push() {
    var array = Array.from(arguments);
    var result = []
    var j = 0

    for (var i = 0; i < array.length; i++) {
        result[j] = array[i]
        j++
    }

    return result
}

// TESTS

    // CASE array is [],[]
        var result = push([123],[9, 8, 7])

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 2, 'result.length is no correct')
        // console.assert(result[0] === [], 'result is no correct')
        // console.assert(result[1] === Array(0), 'result is no correct')
        // console.assert(result[0] == [], 'result is no correct')
        // console.assert(result[0] == Array(0), 'result is no correct')
        // console.assert(result[0] == undefined, 'result is no correct')

    // CASE array is '👋', '🤙'
        var result = push('👋', '🤙')

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 2, 'result.length is no correct')
        console.assert(result[0] === '👋', 'result is no correct')
        console.assert(result[1] === '🤙', 'result is no correct')

    // CASE array is ['👋', '🤙'], 13, 'Hello', true, { "one" : 1, "two" : 2 }, function () {}
        var result = push(['👋', '🤙'], 13, 'Hello', true, { "one" : 1, "two" : 2 }, function () {})

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 6, 'result.length is no correct')
        // console.assert(result[0] === ['👋', '🤙'], 'result is no correct')
        console.assert(result[1] === 13, 'result is no correct')
        console.assert(result[2] === 'Hello', 'result is no correct')
        console.assert(result[3] === true, 'result is no correct')
        // console.assert(result[4] === { "one" : 1, "two" : 2 }, 'result is no correct')
        // console.assert(result[5] === f () {}, 'result is no correct')
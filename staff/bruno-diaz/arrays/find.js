function find(array, functn) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (!(functn instanceof Function)) throw new TypeError(f + ' is not a function')

    for (var i = 0; i < array.length; i++) {
        if (functn(array[i])) break
    }

    return array[i]
}

// TESTS

    // CASE array is ['']
        var result = includes([''], new Function)

        console.assert(typeof result === 'boolean', 'result must be a boolean')
        console.assert(result === false, 'result is no correct')

    // CASE array is ['😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎'] - patter is '' - no index
        var result = includes(['😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎'], '🤪')

        console.assert(typeof result === 'boolean', 'result must be a boolean')
        console.assert(result === true, 'result is no correct')

    // CASE array is ['😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎'] - patter is '' - index is 4
        var result = includes(['😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎'], '🤪', 4)

        console.assert(typeof result === 'boolean', 'result must be a boolean')
        console.assert(result === false, 'result is no correct')

    // CASE array is ['😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎'] - patter is '' - index is 4
        var result = includes(['😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎'], '🤪', -5)

        console.assert(typeof result === 'boolean', 'result must be a boolean')
        console.assert(result === true, 'result is no correct')
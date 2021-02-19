function push(array) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')

    for (var i = 1; i < arguments.length; i++) {
        array[array.length] = arguments[i]
    }

    return array.length
}

// TESTS

    // CASE array is [], arg is ''
        var result = push([],'')

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 1, 'result.length is no correct')
        console.assert(result[0] === '', 'result is no correct')

    // CASE array is [], arg is []
        var result = push([],[])

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 1, 'result.length is no correct')
        console.assert(result[0].length === 0, 'result is no correct')
        console.assert(result[0][0] === undefined, 'result is no correct')

    // CASE array is ['👋'], '🤙'
        var result = push(['👋'], '🤙')

        console.assert(result instanceof Array, 'result must be an array')
        console.assert(result.length === 2, 'result.length is no correct')
        console.assert(result[0] === '👋', 'result is no correct')
        console.assert(result[1] === '🤙', 'result is no correct')

    // CASE array is ['👋', '🤙'], 13, 'Hello', true, { "one" : 1, "two" : 2 }, function () {}
        var result = push(['👋', '🤙'], 13, 'Hello', true, { "one" : 1, "two" : 2 }, function () {})

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


// UNHAPPY RESULTS

    // CASE array is not an array, but string 'Hello, World!'
        var result

        try {
            push('Hello, World!', 0)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'Hello, World! is not an array')

    // CASE array is not a array, but number 8028
        var result

        try {
            push(8028, 0)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '8028 is not an array')

    // CASE array is not a array, but boolean true
        var result
        
        try {
            push(true, 0)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'true is not an array')

    // CASE array is not a array, but an object
        var result

        try {
            push({}, 0)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === '[object Object] is not an array')

    // CASE array is not a array, but a function
        var result
        
        try {
            push(function() {}, 0)
        } catch(error) {
            result = error
        }

        console.assert(result instanceof TypeError)
        console.assert(result.message === 'function() {} is not an array')




function push1(array, ...arg) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    var arguments = Array.from(arg);
    var j = array.length

    for (var i = 0; i < arguments.length; i++) {
        array[j] = arguments[i]
        j++
    }

    return array
}
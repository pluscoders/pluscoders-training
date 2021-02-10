function slice(array, from, to) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (from && typeof from !== 'number') throw new TypeError(i + ' is not a number')
    if (to && typeof to !== 'number') throw new TypeError(i + ' is not a number')

    var result = []

    if (!from) from = 0
    if (!to) to = array.length

    for (from; from < to; from++)
        result[result.length] = array[from]
    
    return result
}

// TEST

    var length = Math.floor(Math.random() * 100)
    var array = []
    var values = []
    
    for (var i = 0; i < length; i++) {
        array[i] = Math.random()
        values[i] = array[i]
    }
    
    var from = Math.floor(Math.random() * length * 1/2)
    var to = 0

    while (from > to)
        to = Math.floor(Math.random() * length)

    var result = slice(array, from, to)

    console.assert(result instanceof Array, 'result must be an array')
    console.assert(result.length === to - from, 'result.length is no correct')

    for (var i = 0; i < values.length; i++)
        console.assert(values[i] === array[i], 'array was changed')
        
    for (var j = 0; j < result.length; j++)
        console.assert(result[j] === array[j + from], 'result is wrong')
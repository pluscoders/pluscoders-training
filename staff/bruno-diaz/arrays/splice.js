// TODO omitir el array toPush

var a = [0, 4, 8, 11, 17, 25, 23, 1, 53, 87, 32, 13, 67, 90]

function splice(array, from) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')

    if (!from || typeof from !== 'number') throw new TypeError(i + ' is not a number')
    if (from < 0) from += array.length

    var count
    if (typeof arguments[2] === 'number') {
        count = arguments[2]
        var  i = 3
        if (count > array.length - from)
            count = array.length - from
    } else {
        count = array.length - from
        var i = 2
    }
    
    var toPush = []

    for (i; i < arguments.length; i++)
        toPush[toPush.length] = arguments[i]

    var mirror = []
    var result = []

    for (var j = from; j < array.length; j++)
        if (j < count + from)
            result[result.length] = array[j]
        else
            mirror[mirror.length] = array[j]
    
    array.length = from

    for (var m = 0; m < toPush.length; m++)
        array[array.length] = toPush[m]

    for (var n = 0; n < mirror.length; n++)
        array[array.length] = mirror[n]
    
    return result
}
splice(a, 3, 'hola', 'adiós')

// TEST

    var length = Math.floor(Math.random() * 100)
    var array = []
    var mirror = []

    for (var i = 0; i < length; i++) {
        array[i] = Math.random()
        mirror[i] = array[i]
    }

    var from = Math.floor(Math.random() * length * 1/2)
    var elements = Math.floor(Math.random() * length * 1/2)

    var result = slice(array, from, elements)
    var otesult = slice(array, from, elements)

    // Results

    console.assert(result instanceof Array, 'result must be an array')
    console.assert(result.length === result.length - elements, 'result.length is no correct')
    
    var j = 0
    for (var i = 0; i < array.length; i++)
    while (i < from && i > from + elements) {
            console.assert(array[i] === result.[j, 'result.length is no correct')
            j++
        }


    for (var i = 0; i < mirror.length; i++)
        console.assert(mirror[i] === array[i], 'array was changed')
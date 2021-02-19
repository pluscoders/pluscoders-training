
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
    var m = i

    var mirror = []
    var result = []

    for (var j = from; j < array.length; j++)
        if (j < count + from)
            result[result.length] = array[j]
        else
            mirror[mirror.length] = array[j]
    
    array.length = from

    for (m; m < arguments.length; m++)
        array[array.length] = arguments[m]

    for (var n = 0; n < mirror.length; n++)
        array[array.length] = mirror[n]
    
    return result
}
splice(a, 3, 'hola', 'adiós')

// TEST

    var length = Math.floor(Math.random() * 100)
    var array = []
    // var mirror = []

    for (var i = 0; i < length; i++) {
        array[i] = Math.random()
        // mirror[i] = array[i]
    }

    var from = Math.floor(Math.random() * length * 1/2)
    var elements = Math.floor(Math.random() * length * 1/2)

    var length2 = Math.floor(Math.random() * 100)
    var addElements = []
    for (var j = 0; j < length2; j++) {
        addElements[j] = Math.floor(Math.random() * 100)
    }

    var result = splice(array, from, elements, addElements.toString())
    var otherResult = array.splice(from, elements)

    // Results

    console.assert(result instanceof Array, 'result must be an array')
    console.assert(result.length === result.length - elements, 'result.length is no correct')
    

    for (var i = 0; i < result.length; i++)
        console.assert(result[i] === otherResult[i], 'result is wrong')


// Result = elementos borrados (desde from y elements restantes)
// Array muta. Se borran los elementos de result y se añaden los nuevos
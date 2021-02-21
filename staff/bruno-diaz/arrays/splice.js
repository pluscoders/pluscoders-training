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

    var result = []
    var copy = []
    
    for (var j = from; j < array.length; j++) {
        if (j < from + count)
            result[result.length] = array[j]
        else
            copy[copy.length] = array[j]
        
        delete array[array.length]
    }

    array.length = from

    for (var m = i; m < arguments.length; m++)
        array[array.length] = arguments[m]
    
    for (var n = 0; n < copy.length; n++)
        array[array.length] = copy[n]
    
    return result
}

// TEST

// var array = []
// var mirror = []
// array.length = Math.floor(Math.random() * 100)

// for (var i = 0; i < array.length; i++) {
//     array[i] = Math.random()
//     mirror[i] = array[i]
// }

// var from = Math.floor(Math.random() * array.length * 1/2)
// var elements = Math.floor(Math.random() * array.length * 1/2)

// var addElements = []
// addElements.length = Math.floor(Math.random() * 100)
// for (var j = 0; j < addElements.length; j++)
//     addElements[j] = Math.floor(Math.random() * 100)

// var result = splice(array, from, elements, addElements.toString())
// var otherResult = array.splice(from, elements)

// Results

// console.assert(result instanceof Array, 'result must be an array')
// console.assert(result.length === result.length - elements, 'result.length is no correct')


// for (var i = 0; i < result.length; i++)
//     console.assert(result[i] === otherResult[i], 'result is wrong')

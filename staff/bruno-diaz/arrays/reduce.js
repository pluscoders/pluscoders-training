function reduce(array, callback, accumulator) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (!(callback instanceof Function)) throw new TypeError(callback + ' is not an function')

    var result

    if (array.length === 0) {
        if (typeof accumulator === 'undefined') throw new TypeError('Reduce of empty array with no initial value')
    } else if (array.length === 1) {
        if (typeof accumulator === 'undefined') result = array[0]
    } else {
        var i = 0
        if (typeof accumulator === 'undefined') {
            accumulator = array[0]
            result = array[0]
            i = 1
        }
        for (i; i < array.length; i++) {
            if (i !== 0) accumulator = result
            result = callback(accumulator, array[i], i, array)
        }
    }

    return result
}
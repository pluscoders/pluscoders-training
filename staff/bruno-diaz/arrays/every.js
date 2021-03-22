function every(array, callback) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    
    if (!(callback instanceof Function)) throw new TypeError(callback + ' is not a function')

    var result = true

    for (var i = 0; i < array.length; i++) {
        result = callback(array[i], i, array)

        if (!result) break
    }

    return result
}
function find(array, callback) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (!(callback instanceof Function)) throw new TypeError(f + ' is not a function')

    for (var i = 0; i < array.length; i++)
        if (callback(array[i])) break

    return array[i]
}
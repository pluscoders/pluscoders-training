/**
 * Merge two or more arrays.
 * 
 * @param {*} arrayN - The array.
 * 
 * @returns {array} - A new arrays instance.
 * 
 * @throws {TypeError} - If the array parameter is not array.
 */
function concat(arrayN) { // WARN use arguments to support n input arrays!
    if (typeof Array.isArray(arrayN) === false) throw new TypeError(array + ' is not a array')

    for (var i = 0; i < arguments.length; i++) {
        array += arguments[i]
    }

    return array
}



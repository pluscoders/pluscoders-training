/**
 * Returns a new array with the elements modified by the function
 *
 * @param {Array} array  - The array to be modified
 * @param {Function} callback  - The callback expression that modifies the elements
 * @param {Number} element  - The value used in by the callback to modify the current element
 *
 * @returns {Array} - A new array with the modified elements
 *
 * @throws {TypeError} - When any of the input parameters does not match the expected type
 */
function map(array, callback, element) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var result = []

    for (var i = 0; i < array.length; i++) {
        result[result.length] = callback(array, i, element)
    }
    return result
}
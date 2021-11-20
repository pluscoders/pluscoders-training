/**
 * Returns the first value of the provided array that fulfills the required condition or undefined if not
 *
 * @param {Array} array  - The array to filter elements from
 * @param {Function} callback  - The callback expression that conditions the search
 *
 * @returns {Number} - The value element that match the requiered condition or undefined if it doesn't
 *
 * @throws {TypeError} - When any of the input parameters does not match the expected type
 */

function find(array, callback) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        if (callback(element, i, array)) return element
    }
}
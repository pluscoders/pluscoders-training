/**
 * Filters an array by a condition expressed in a callback
 *
 * @param {Array} array  - The array to filter elements from
 * @param {Function} callback  - The callback expression that conditions the filtering
 *
 * @returns {Array} - The filtered elements in a new array
 *
 * @throws {TypeError} - When any of the input parameters does not match the expected type
 */
function filter(array, callback) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var filtered = []

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        if (callback(element, i, array))
            filtered[filtered.length] = element
    }

    return filtered
}
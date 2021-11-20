/**
 * Executes the provided function once per every single element.
 * 
 * @param {Array} array  - The array to provide elements from
 * @param {Function} callback  - The callback expression that interacts over every element
 * 
 * @throws {TypeError} - When any of the input parameters does not match the expected type
 */
function forEach(array, callback) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (var i = 0; i < a.length; i++) {
        callback(array[i], i, array)
    }
}
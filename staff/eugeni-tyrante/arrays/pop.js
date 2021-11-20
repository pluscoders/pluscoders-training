/**
 * Removes the last element of the provided array and returns it
 *
 * @param {Array} array  - The array to remove its last element
 *
 * @returns {Element} - The last element removed from the original array
 * @returns {undefined} - When the provided array is empty
 *
 * @throws {TypeError} - When any of the input parameters does not match the expected type
 */
function pop(array) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')

    var removed = ''
    removed = array[array.length - 1]

    if (array.length > 1) {
        array.length = array.length - 1
    }

    return removed
}
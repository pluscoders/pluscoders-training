/**
 * Returns a new array with the elements from an original array indexed between the start and end value
 *
 * @param {Array} array  - The array to slice the elements
 * @param {Number} [start]  - This value indicates where will start the function
 * @param {Number} [end] - This value indicates where will end the function
 *
 * @returns {Array} - A new array with the elements between start and end or undefined if the values doesn't match
 *
 * @throws {TypeError} - When any of the input parameters does not match the expected type
 */
function slice(array, start, end) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')

    if (start > array.length) {
        start = array.length
    }

    if (start < 0) {
        start = array.length + start
    }

    if (array.length + start === 0) {
        start = 0
    }

    if (end > array.length - start) {
        end = array.length
    }

    var result = []

    for (var i = start; i < end; i++) {
        result[result.length] = array[i]

        if (end > array.length) {
            end = array.length
        }
    }

    return result
}
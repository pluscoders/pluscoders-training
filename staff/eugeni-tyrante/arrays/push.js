/**
 * Adds an element in the last position of the provided array and returns the new length of the array
 *
 * @param {Array} array - The array to add the element
 * @param {arguments} - The element or elements which will be added in the last position of the array
 *
 * @returns {Number} - The length of the original array provided with the element in the last position added
 *
 * @throws {TypeError} - When any of the input parameters does not match the expected type
 */
 function push(array) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')

    for (var i = 1; i < arguments.length; i++) {
        array[array.length] = arguments[i]
    }

    return array.length
}
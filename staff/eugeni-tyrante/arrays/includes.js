/**
 * Takes an array and compares it with a provided element from the specified index position and if match returns true or false if not
 *
 * @param {Array} array  - An array with the elements to search on
 * @param {Element} searchElement  - An element to be compared with the element of the array
 * @param {Number} [fromIndex] - A number set as index which the function will start from 
 *
 * @returns {boolean} - Return true if a match is found or false if not
 *
 * @throws {TypeError} - When array is not an array or searchElement is undefined
 */
function includes(array, searchElement, fromIndex) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if ((searchElement === undefined)) throw new TypeError('searchElement is not defined')

    if (fromIndex > 0) {
        i = fromIndex
    }
    else {
        i = 0
    }

    for (var i; i < array.length; i++) {
        if (array[i] === searchElement) {
            return true
        }

    }

    return false
}
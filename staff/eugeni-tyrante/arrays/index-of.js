/**
 * Takes an array and compares it with a provided element from the specified index position and if it matches returns the position of that element or -1 if not
 * 
 * @param {Array} array  - An array with the elements to search on
 * @param {Element} searchElement  - An element to be compared with the element of the array
 * @param {Number} [fromIndex]  - A number set as index which the function will start from 
 *
 * @returns {Number} - If the element is found returns the position in the array or -1 if its not found
 *
 * @throws {TypeError} - When array is not an array or searchElement is undefined
 */
function indexOf(array, element, fromIndex) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if ((searchElement === undefined)) throw new TypeError('searchElement is not defined')

    if (fromIndex > 0) {
        i = fromIndex
    }
    else {
        i = 0
    }

    for (var i; i < array.length; i++) {
        if (array[i] === element) {
            return i
        }
    }
    return -1
}
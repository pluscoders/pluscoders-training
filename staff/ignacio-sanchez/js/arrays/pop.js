/**
 * Removes the last element from an array nad returns that element.
 * 
 * @param {Array} array - The array to remove elements to.
 * 
 * @returns {string} - The removed element from the array.
 * 
 * @throws {TypeError} - If the array parameter is not array.
 */
function pop(array) {
    if (typeof Array.isArray(array) === false ) throw new TypeError(array + ' is not a array')
    
    var lastIndex = array.length - 1
    var lastElement = array[lastIndex]

    array.length--

    return lastElement
}

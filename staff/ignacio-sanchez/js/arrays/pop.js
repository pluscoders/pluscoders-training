/**
 * Removes the last element from an array and returns that element.
 * 
 * @param {Array} array - The array to remove the last element from.
 * 
 * @returns {*} - The removed last element from the array.
 * 
 * @throws {TypeError} - If the array parameter is not array.
 */
function pop(array) {
    if (!Array.isArray(array)) throw new TypeError(array + ' is not a array')
    
    if (array.length) {
        var lastIndex = array.length - 1
        var lastElement = array[lastIndex]
    
        array.length--
    
        return lastElement
    }
}

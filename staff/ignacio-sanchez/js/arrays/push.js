/**
 * Adds one or more elements to an array.
 * 
 * @param {Array} array - The array to add elements to.
 * 
 * @param {*} element - The element(s) to add to the array.  
 * 
 * @returns {number} - The length of the array.
 * 
 * @throws {TypeError} - If the array parameter is not array.
 */
function push(array) {
    if (!Array.isArray(array)) throw new TypeError(array + ' is not a array')

    for (var i = 1; i < arguments.length; i++) {
        array[array.length] = arguments[i]
    }

    return array.length
}

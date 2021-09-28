/**
 * Create a new array with the results of a calling provided function.
 * 
 * @param {Array} array - The array.
 * @param {function} callback - The function to execute on each element in an array.
 * 
 * @returns {Array} - A new arrays instance.
 * 
 * @throws {TypeError} - If the array parameter is not array.
 */
function map(array, callback) {
    if (!Array.isArray(array)) throw new TypeError(array + ' is not a array')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var newArray = []

    for (var i = 0; i < array.length; i++) {
        var element = array[i]
        
        newArray[i] = callback(element, i, array)
    }

    return newArray
}
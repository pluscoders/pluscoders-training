/**
 * Create a new array with the results of a calling provided function.
 * 
 * @param {*} arrayN - The array.
 * @param {function} callback - The function to execute on each element in an array.
 * 
 * @returns {array} - A new arrays instance.
 * 
 * @throws {TypeError} - If the array parameter is not array.
 */
function map(array, callback) { // WARN use arguments to support n input arrays!
    if (!Array.isArray(array)) throw new TypeError(array + ' is not a array')

    var newArray = []
debugger
    for (var i = 0; i < array.length; i++) {
        var element = array[i]
        callback(element, index, array)
    }

    return newArray
}
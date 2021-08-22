/**
 * Execute a provided function once for each array element.
 * 
 * @param {*} array - The array parameter for the function.
 * @param {*} callback - The function to execute on each element in an array.
 * 
 * @throws {TypeError} - If the function parameter is not a function.
 */
function forEach(array, callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        callback(element, i, array)
    }
}
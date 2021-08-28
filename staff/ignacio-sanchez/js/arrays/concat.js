/**
 * Merge two or more arrays.
 * 
 * @param {*} arrayN - The array.
 * 
 * @returns {array} - A new arrays instance.
 * 
 * @throws {TypeError} - If the array parameter is not array.
 */
function concat(array) { // WARN use arguments to support n input arrays!
    if (!Array.isArray(array)) throw new TypeError(array + ' is not a array')

    var newArray = []

    for (var i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i]))
            for (var j = 0; j < arguments[i].length; j++) {
                newArray[newArray.length] = arguments[i][j]
            }
        else newArray[newArray.length] = arguments[i]    
    }

    return newArray
}



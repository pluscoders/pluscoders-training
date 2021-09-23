/**
 * Creates and return a new string by concatenating all of the elements in an array, 
 * separated by commas or a specefied separator string.
 * 
 * @param {separator} - Specifies a string to separate each pair of adjacent elements ot the array.
 * 
 * @returns {string} - A string with all array elements joined.
 * 
 * @throws {TypeError} - If the array parameter is not array.
 */
function join(array, separator) {
    if (!Array.isArray(array)) throw new TypeError(array + ' is not a array')

    var string = ''

    for (var i = 0; i < array.length; i++) {
        string += (array[i])
        if (i < array.length -1)
            string += separator
    }

    return string
}
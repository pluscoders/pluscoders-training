/**
 * Takes an array and adds other provided arrays to create a new array with all the elements
 *
 * @param {Array} array - The first array to start a new array
 * @param {arguments} - Arrays to add after the first array
 *
 * @returns {Array} - All the elements from the original array and the elements in the provided order into a new array
 * @returns {Array} - Empty array When the provided arrays are empty
 *
 */
function concat(array) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')

    var newArray = arguments[0]

    for (var i = 1; i < arguments.length; i++) {
        for (var j = 0; j < arguments.length; j++) {
            var workOn = arguments[i]
            if (workOn[j] != undefined) {
                newArray[newArray.length] = workOn[j]
            }
            else {
                j++
            }
        }
    }
    return newArray
}
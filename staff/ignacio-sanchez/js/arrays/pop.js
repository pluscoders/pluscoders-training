/**
 * TODO ...
 * 
 * @param {Array} array - The array ...
 */
function pop(array) {
    // TODO validate array parameter is an array
    
    var lastIndex = array.length - 1
    var lastElement = array[lastIndex]

    array.length--

    return lastElement
}

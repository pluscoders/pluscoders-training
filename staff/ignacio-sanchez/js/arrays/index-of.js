/**
 * Return the index within the calling string object of the first occurrance of the specified value, starting at fromIndex.
 * 
 * @param {Array} array - The array to check.
 * @param {Array} searchElement - The element to locate in the array.
 * @param {object} fromIndex - The index to star the search at.
 * 
 * @throws {TypeError} - If the array parameter is not array.  
 */
function indexOf(array, searchElement, fromIndex) {
    if (typeof Array.isArray(array) === false) throw new TypeError(array + ' is not a array')

    for (var i = fromIndex || 0; i < array.length; i++) {
        if (array[i] === searchElement)
            return i
        else if (i === array.length - 1 && array[i] !== searchElement)
            return -1
    }
}
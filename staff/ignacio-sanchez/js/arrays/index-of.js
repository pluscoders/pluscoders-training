/**
 * Return the index within the calling string object of the first occurrance of the specified value, starting at fromIndex.
 * 
 * @param {Array} array - The array to check.
 * @param {*} searchElement - The element to locate in the array.
 * @param {number} [fromIndex] - The index to star the search at.
 * 
 * @returns TODO
 * 
 * @throws {TypeError} - If the array parameter is not array.  
 */
function indexOf(array, searchElement, fromIndex) {
    if (!Array.isArray(array)) throw new TypeError(array + ' is not a array')

    for (var i = fromIndex || 0; i < array.length; i++) {
        if (array[i] === searchElement)
            return i
    }

    return -1
}
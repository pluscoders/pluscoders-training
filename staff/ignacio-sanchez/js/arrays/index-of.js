/**
 * TODO ....
 * 
 * @param {Array} array - The array ...
 * @param {Array} searchElement - The element to find in the array.  
 */
 function indexOf(array, searchElement, fromIndex) {
     // TODO validate array parameter is an array

    for (var i = fromIndex || 0; i < array.length; i++) { // NOTE short-circuit evaluation
        if(array[i] === searchElement)
            return i 
    }
}
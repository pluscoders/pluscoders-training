/**
 * @param {Array} arr - The array.
 * 
 * @param {Array} searchElement - The pattern to find in the array.  
 */

 function indexof(arr, searchElement, fromIndex) {
    var i = fromIndex
    for (var i ; i < arr.length; i++) {
        if(arr[i] === searchElement[0])
        return [i] 
    }
}
/**
 * @param {Array} arr - The array
 * 
 * @param {Array} element - The pattern to find in the array.  
 */

 function indexof(arr, searchElement) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === searchElement[0])
        return [i] 
    }
}
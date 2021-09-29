/**
 * Return the value of the first element in the provided array that satisfies the 
 * provided testing function.
 * 
 * @param {Array} array - The array.
 * @param {function} callback - The function to execute on each element in an array.
 * 
 * @returns {*} - The value of the first element in the array that satisfies the provided function.
 * 
 * @throws {TypeError} - If the array parameter is not array.
 */
function find(array, callback) {
   if (!Array.isArray(array)) throw new TypeError(array + ' is not a array')
   if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
   
   for (var i = 0; i < array.length; i++) {
      var element = array[i]

      if (callback(element, i, array))
         return element
   }
}
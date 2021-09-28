/**
 * Return the value of the first element in the provided array that satisfies the 
 * provided testing function.
 * 
 * @param {Array} array - The array.
 * @param {function} callback - The function to execute on each element in an array.
 * 
 * @returns {array} - The value of the first element in the array that satisfies the provided function.
 * 
 * @throws {TypeError} - If the array parameter is not array.
 */
function find(array, callback) {
   if (!Array.isArray(array)) throw new TypeError(array + ' is not a array')
   if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

   // TODO iterate in the array and evaluate the callback for each element
   // TODO as soon as the callback returns true, then break the loop and return that element

   var newArray = []
   
   for (var i = 0; i < array.length; i++) {
      var element = array[i]

      newArray[i] = callback(element, i, array)
      if (newArray[i] === true) {
         foundArray = newArray[i]
         return foundArray
      }
   }

}
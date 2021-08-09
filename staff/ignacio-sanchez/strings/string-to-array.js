/**
 * Send the text to an array
 * 
 * @param {string} text The text to convert into an array.
 * 
 * @returns {Array} The text parts.
 * 
 * @throws {TypeError} - If the text parameter is not string.
 * 
 * @author Ignacio Sanchez
 * 
 * @version 1.0.0
 */
function stringToArray(text) {
  if (typeof text !== 'string') throw new TypeError(text + ' is not a string')

  var arr = [];
  
  for (var i = 0; i < text.length; i++) {
    arr[i] = text[i]
  }
  
  return arr
}
/**
 * Send the text to an array
 * 
 * @returns {Array} The text parts.
 * 
 * * @throws {TypeError} - If the text parameter is not string.
 * 
 * @author Ignacio Sanchez
 * @version 1.0.0
 */
String.prototype.stringToArray = function() {
 // (Da error si lo dejo) if (typeof this !== 'string') throw new TypeError(this + ' is not a string')

  var arr = [];
  
  for (var i = 0; i < this.length; i++) {
    arr[i] = this[i]
  }
  
  return arr
}
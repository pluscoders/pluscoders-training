/**
 * Splits the string into an array of characters.
 * 
 * @returns {Array} An array with the characters of the string.
 * 
 * @author Ignacio Sanchez
 * 
 * @version 1.0.0
 */
String.prototype.toArray = function () {
  var arr = [];

  for (var i = 0; i < this.length; i++) {
    arr[i] = this[i]
  }

  return arr
}
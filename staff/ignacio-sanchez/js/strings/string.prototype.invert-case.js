/**
 * Inverts uppercase and lowercase in each letter.
 * 
 * @returns {string} Reversed characters in uppercase and lowercase.
 * 
 * @author Ignacio Sanchez
 * 
 * @version 1.0.1
 */
String.prototype.invertCase = function () {
    var result = ''

    for (var i = 0; i < this.length; i++) {
        var curr = this[i]

        if (isNotVoid(curr)) {
            if (isUpperCase(curr)) {
                result += curr.toLowerCase()
            } else { // lower case
                result += curr.toUpperCase()
            }
        } else {
            result += curr
        }
    }
    
    return result
}
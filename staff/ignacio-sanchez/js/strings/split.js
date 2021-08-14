/**
 * Splits a text into parts by a pattern
 * 
 * @param {string} text The text to split
 * @param {*} pattern The pattern to find (a single character a string)
 * 
 * @returns {Array} The text parts (divided by pattern)
 * 
 * @throws {TypeError} - If the text parameter is not string
 * 
 * @author Iñaki Sanchez
 * 
 * @version 2.0.0
 */
function split(text, pattern) {
    if (typeof text !== 'string') throw new TypeError(text + ' is not a string')

    pattern = pattern.toString()

    var result = []
    var part = ''
    var j = 0

    for (var i = 0; i < text.length; i++) {
        var char = text[i]

        if (char === pattern[j]) {
            j++

            if (j === pattern.length) {
                result[result.length] = part
                
                part = ''
                
                j = 0
            }
        } else {
            part += char
            
            if (char !== pattern[j - 1])
                j = 0
        }
        
        if (i === text.length - 1) {
            result[result.length] = part
        }
    }

    return result
}
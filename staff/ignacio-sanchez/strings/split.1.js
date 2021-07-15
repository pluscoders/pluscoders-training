/**
 * Splits a text into parts by a pattern
 * 
 * @param {srting} text The text to split
 * @param {*} pattern The pattern to find (a single character a string)
 * 
 * @returns {Array} The text parts (divided by pattern)
 * 
 * * @throws {TypeError} - If the text parameter is not string
 * 
 * @author Iñaki Sanchez
 * @version 1.0.0
 */
function split(text, pattern) {
    if (typeof text !== 'string') throw new TypeError(text + ' is not a string')

    pattern = pattern.toString()

    var result = []
    var part = ''

    for (var i = 0; i < text.length; i++) {
        var char = text[i]

        if (char !== pattern) {
            part += char

            if (i === text.length - 1) {
                result[result.length] = part
            }
        } else if (char === pattern) {
            result[result.length] = part

            part = ''
        }
    }

    return result
}
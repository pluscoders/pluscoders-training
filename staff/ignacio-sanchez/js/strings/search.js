/**
 * Searches a pattern in a text
 *
 * @param text {string} - The text to explore
 * @param pattern {*} - The pattern to find
 *
 * @returns {number} - The index where the pattern is located in the text (if found, otherwise -1)
 *
 * @throws {TypeError} - If the text parameter is not string
 */
 function search(text, pattern) {
    if (typeof text !== 'string') throw new TypeError(text + ' is not a string')

    pattern = pattern.toString()

    var j = 0

    for (var i = 0; i < text.length; i++) {
        var char = text[i]

        if (char === pattern[j])
            j++
        else 
            j = 0

        if (j === pattern.length)
            return i - pattern.length + 1
    }

    return -1
}
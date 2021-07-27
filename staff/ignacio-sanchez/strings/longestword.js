/**
 * Count the words in a text
 *
 * @param text {string} - The text to explore
 *
 * @returns {number} - The number of words founded
 *
 * @throws {TypeError} - If the text parameter is not string
 */

 function longestWords(text) {
    if (typeof text !== 'string') throw new TypeError(text + ' is not a string')

    var count = 0
    var word = ''
    var words = []

    for (var i = 0; i < text.length; i++) {
        var curr = text[i]

        var prev = text[i - 1]

        if (curr !== ' ' 
            && curr !== '\t' 
            && curr !== '\n' 
            && (prev === undefined 
            || prev === ' ' 
            || prev === '\t' 
            || prev === '\n')) {
                word += curr //= word + curr
            }
        else if (curr !== ' ' 
            && curr !== '\t' 
            && curr !== '\n' 
            && (prev !== undefined 
            && prev !== ' ' 
            && prev !== '\t' 
            && prev !== '\n')) {
                word += curr //= word + curr
            }
        
        if ((curr === ' '
            || curr === '\t'
            || curr === '\n'
            || i === text.length - 1)
            && word) {
                if (words.length) {
                    var first = words[0]

                    if (word.length > first.length) {
                        words.length = 0

                        words[words.length] = word
                    } else if (word.length === first.length)
                        words[words.length] = word
                } else words[words.length] = word

                word = ''
            }

    }

    return words
}

longestWords("\tmundo hello hi bud bad\n \ngood \tworld\n\t hola mundo") 
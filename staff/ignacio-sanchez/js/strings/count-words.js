/**
 * Count the words in a text.
 *
 * @param text {string} - The text to explore.
 *
 * @returns {number} - The number of words found.
 *
 * @throws {TypeError} - If the text parameter is not string.
 */
 function countWords(text) {
    if (typeof text !== 'string') throw new TypeError(text + ' is not a string')

    var count = 0


    for (var i = 0; i < text.length; i++) {
        var curr = text[i]


        var prev = text[i - 1]

        if (
            (
                curr === ' ' 
                && curr !== '\t' 
                && curr !== '\n' 
                ||
                curr !== ' ' 
                && curr === '\t' 
                && curr !== '\n' 
                || 
                curr !== ' ' 
                && curr !== '\t' 
                && curr === '\n' 
            ) 
            && prev !== undefined 
            && prev !== ' ' 
            && prev !== '\t' 
            && prev !== '\n'
            ||
            curr !== ' ' 
            && curr !== '\t' 
            && curr !== '\n' 
            && i === (text.length - 1)
        )
            count++
    }

    return count
}

//countWords('  hol     \t \n a    ')
//countWords(' \t\nhol\n \n     \t \n\n \t a\n \ta \n  \ta\n   \t ')
//countWords(' hol\t     \t \n a  .   \t')



/// original sin factor 

function countWords(text) {
    if (typeof text !== 'string') throw new TypeError(text + ' is not a string')

    var count = 0


    for (var i = 0; i < text.length; i++) {
        var curr = text[i]


        var prev = text[i - 1]

        if (
            curr === ' ' 
            && curr !== '\t' 
            && curr !== '\n' 
            && prev !== undefined 
            && prev !== ' ' 
            && prev !== '\t' 
            && prev !== '\n' 
            ||
            curr !== ' ' 
            && curr === '\t' 
            && curr !== '\n' 
            && prev !== undefined 
            && prev !== ' ' 
            && prev !== '\t' 
            && prev !== '\n' 
            || 
            curr !== ' ' 
            && curr !== '\t' 
            && curr === '\n' 
            && prev !== undefined 
            && prev !== ' ' 
            && prev !== '\t' 
            && prev !== '\n' 
            ||
            curr !== ' ' 
            && curr !== '\t' 
            && curr !== '\n' 
            && i === (text.length - 1)
        )
            count++
    }

    return count
}

//countWords('  hol     \t \n a    ')
//countWords(' \t\nhol\n \n     \t \n\n \t a\n \ta \n  \ta\n   \t ')
//countWords(' hol\t     \t \n a  .   \t')

/**
 * Finds the longest(s) word(s) in the string.
 *
 * @returns [{string}] - The longest words found in the string.
* 
 * @author Ignacio Sanchez
 * 
 * @version 1.0.0
 */
 String.prototype.longestWords = function () {
    var word = ''
    var words = []

    for (var i = 0; i < this.length; i++) {
        var curr = this[i]

        var prev = this[i - 1]

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
            || i === this.length - 1)
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

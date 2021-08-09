/**
 * Count the words in the string.
 *
 * @returns {number} - The number of words found.
 */
String.prototype.countWords = function () {
    var count = 0

    for (var i = 0; i < this.length; i++) {
        var curr = this[i]


        var prev = this[i - 1]

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
            && i === (this.length - 1)
        )
            count++
    }

    return count
}
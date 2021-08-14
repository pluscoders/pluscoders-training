/**
 * Count the words in the string.
 *
 * @returns {number} - The number of words found.
 * 
 * @author Ignacio Sanchez
 * 
 * @version 1.0.1
 */
String.prototype.countWords = function () {
    var count = 0

    for (var i = 0; i < this.length; i++) {
        var curr = this[i]


        var prev = this[i - 1]

        if (
            (isSpace(curr)
                && !isTab(curr)
                && !isNewLine(curr)
                ||
                !isSpace(curr)
                && isTab(curr)
                && !isNewLine(curr)
                ||
                !isSpace(curr)
                && !isTab(curr)
                && isNewLine(curr)
            )
            && isNotUndefined(prev)
            && !isSpace(prev)
            && !isTab(prev)
            && !isNewLine(prev)
            ||
            !isSpace(curr)
            && !isTab(curr)
            && !isNewLine(curr)
            && i === (this.length - 1)
        )
            count++
    }

    return count
}
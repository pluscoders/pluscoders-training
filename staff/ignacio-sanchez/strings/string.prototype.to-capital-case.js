/**
 * Capitalizes the first letter of each word.
 * 
 * @returns {string} The text with each of the first word capitalized.
 * 
 * @author Ignacio Sanchez
 * 
 * @version 1.0.1
 */
String.prototype.toCapitalCase = function () {
    var result = ''

    for (var i = 0; i < this.length; i++) {
        var curr = this[i]

        var prev = this[i - 1]

        if (isNotVoid(curr)) {
            if (isUpperCase(curr)
                && (isUndefined(prev) || isVoid(prev))) {
                result += curr //= word + curr
            } else {
                if (isNotVoid(prev)) {
                    if (isUndefined(prev)) {
                        result += curr.toUpperCase() //= word + curr
                    } else if ((isNotUndefined(prev))) {
                        result += curr //= word + curr
                    } else if (isNotUndefined(prev)) {
                        result += curr //= word + curr
                    }
                } else if (isSpace(prev)
                    && !isTab(prev)
                    && !isNewLine(prev)) {
                    result += curr.toUpperCase() //= word + curr
                } else if ((isTab(prev)
                    || isNewLine(prev))) {
                    result += curr.toUpperCase() //= word + curr
                }
            }
        } else if (isVoid(curr) && result) {
            result += curr //= word + curr
        } else if (isSpace(curr)
            || isTab(curr)
            || !isNewLine(curr)
            && isUndefined(prev)) {
            result += curr //= word + curr
        }
    }
    return result
}



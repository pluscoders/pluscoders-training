/**
 * Capitalizes the first letter of each word.
 * 
 * @returns {string} The text with each of the first word capitalized.
 * 
 * @author Ignacio Sanchez
 * 
 * @version 1.0.0
 */
String.prototype.toCapitalCase = function () {
    var result = ''

    for (var i = 0; i < this.length; i++) {
        var curr = this[i]

        var prev = this[i - 1]

        if (curr !== ' '
            && curr !== '\t'
            && curr !== '\n'
            && /[A-Z0-9]/.test(curr)
            && (prev === undefined
                || prev === ' '
                || prev === '\t'
                || prev === '\n')) {
            result += curr //= word + curr
        }
        else if (/[a-z0-9]/.test(curr)
            && curr !== '\t'
            && curr !== '\n'
            && /[a-z0-9]/.test(curr)
            && (prev === undefined
                && prev !== ' '
                && prev !== '\t'
                && prev !== '\n')) {
            result += curr.toUpperCase() //= word + curr
        }
        else if (curr !== ' '
            && curr !== '\t'
            && curr !== '\n'
            && /[a-z0-9]/.test(curr)
            && (prev === undefined
                && prev !== ' '
                && prev !== '\t'
                && prev !== '\n')) {
            result += curr.toUpperCase() //= word + curr
        }
        else if (curr !== ' '
            && curr !== '\t'
            && curr !== '\n'
            && /[a-z0-9]/.test(curr)
            && (prev === ' '
                && prev !== '\t'
                && prev !== '\n')) {
            result += curr.toUpperCase() //= word + curr
        }

        else if (curr !== ' '
            && curr !== '\t'
            && curr !== '\n'
            && /[a-z0-9]/.test(curr)
            && (prev !== undefined
                && prev !== ' '
                && prev !== '\t'
                && prev !== '\n')) {
            result += curr //= word + curr
        }
        else if (curr !== ' '
            && (prev !== undefined
                && prev !== ' '
                && prev !== '\t'
                && prev !== '\n')) {
            result += curr //= word + curr
        }
        else if ((curr === ' '
            || curr === '\t'
            || curr === '\n'
        )
            && result) {
            result += curr //= word + curr
        }
        else if (curr === ' '
            || curr === '\t'
            || curr !== '\n'
            && (prev == undefined
            )) {
            result += curr //= word + curr
        }
            else if (/[a-z0-9]/.test(curr)
            && (prev === '\t'
                || prev === '\n')) {
            result += curr.toUpperCase() //= word + curr
        }
        
    }
    return result
}



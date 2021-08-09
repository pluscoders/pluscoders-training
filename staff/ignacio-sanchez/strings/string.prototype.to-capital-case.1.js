String.prototype.toCapitalCase = function () {
    var result = ''

    for (var i = 0; i < this.length; i++) {
        var curr = this[i]

        var prev = this[i - 1]

        if (curr !== ' '
            && curr !== '\t'
            && curr !== '\n'
            && curr === curr.toUpperCase()
            && (prev === undefined
                || prev === ' '
                || prev === '\t'
                || prev === '\n')) {
            result += curr //= word + curr
        }
        else if (curr !== ' '
            && curr !== '\t'
            && curr !== '\n'
            && curr !== curr.toUpperCase()
            && (prev === undefined
                && prev !== ' '
                && prev !== '\t'
                && prev !== '\n')) {
            result += curr.toUpperCase() //= word + curr
        }
        else if (curr !== ' '
            && curr !== '\t'
            && curr !== '\n'
            && curr !== curr.toUpperCase()
            && (prev === " "
                && prev !== ' '
                && prev !== '\t'
                && prev !== '\n')) {
            result += curr.toUpperCase() //= word + curr
        }
        else if (curr !== ' '
            && curr !== '\t'
            && curr !== '\n'
            && curr !== curr.toUpperCase()
            && (prev === " "
                && prev !== '\t'
                && prev !== '\n')) {
            result += curr.toUpperCase() //= word + curr
        }
        else if (curr !== ' '
            && curr !== '\t'
            && curr !== '\n'
            && curr !== curr.toUpperCase()
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
        if ((curr === ' '
            || curr === '\t'
            || curr === '\n'
        )
            && result) {
            result += curr //= word + curr
        }
    }
    return result
}



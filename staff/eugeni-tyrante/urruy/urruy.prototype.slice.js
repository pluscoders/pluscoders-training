Urruy.prototype.slice = function (start, end) {
    if (start > this.length) {
        start = this.length
    }

    if (start < 0) {
        start = this.length + start
    }

    if (this.length + start === 0) {
        start = 0
    }

    if (end > this.length - start) {
        end = this.length
    }

    if (end === undefined) {
        end = this.length
    }

    if (end > this.length) {
        end = this.length
    }

    var result = new Urruy

    for (var i = start; i < end; i++) {
        result[result.length] = this[i]
        result.length++
    }

    return result
}
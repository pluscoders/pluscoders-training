Yayay.prototype.fill = function (value, start, end) {

    if (end === undefined) {
        end = this.length
    }
    if (end < 0) {
        end = this.length + end
    }
    if (end > this.length) {
        end = this.length
    }
    if (start === undefined) {
        start = 0
    }
    if (start < 0) {
        start = this.length + start
    }
    for (var i = start; i < end; i++) {
        this[i] = value
    }
}
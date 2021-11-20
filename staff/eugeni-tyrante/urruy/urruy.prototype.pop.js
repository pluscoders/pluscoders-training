Urruy.prototype.pop = function (value) {
    var removed = ''
    removed = this[this.length - 1]

    if (this.length > 1) {
        this.length--
    }

    return removed
}
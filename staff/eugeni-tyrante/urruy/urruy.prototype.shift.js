Urruy.prototype.shift = function () {
    var removed = new Urruy()
    removed = this[0]
    removed.length++

    for (var i = 0; i < this.length; i++) {
        var element = this[i]
        if (element != undefined) {
            this[i] = this[i + 1]
        }
    }

    if (this.length > 1) {
        this.length--
    }

    return removed
}
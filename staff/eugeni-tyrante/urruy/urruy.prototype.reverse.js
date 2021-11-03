Urruy.prototype.reverse = function() {
    for (var i = 0; i < this.length / 2; i++) {
        var val1 = this[i]
        var val2 = this[this.length - i - 1]

        if (val1 !== val2) {
            this[i] = val2
            this[this.length - i - 1] = val1
        }

    }

    return this
}
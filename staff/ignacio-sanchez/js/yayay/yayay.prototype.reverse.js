Yayay.prototype.reverse = function () {
    for (var i = 0; i < this.length / 2; i++) {
        var tmp1 = this[i]
        var tmp2 = this[this.length - 1 - i]

        if (tmp1 !== tmp2) {
            this[i] = tmp2
            this[this.length - 1 - i] = tmp1
        }
    }
}
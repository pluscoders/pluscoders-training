Urruy.prototype.some = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (callback(element, i, this)) {
            return true
        }
    }
    return false
}
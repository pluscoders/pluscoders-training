Yayay.prototype.some = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (callback(element, i, this))
            return true
    }
    return false
}
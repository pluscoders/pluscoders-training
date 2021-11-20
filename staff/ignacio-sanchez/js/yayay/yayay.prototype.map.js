Yayay.prototype.map = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var newYayay = new Yayay

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        newYayay[i] = callback(element, i, this)
    }

    return newYayay
}
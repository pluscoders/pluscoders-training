Yayay.prototype.push = function (element) {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i]
        this.length++
    }
    return this
}




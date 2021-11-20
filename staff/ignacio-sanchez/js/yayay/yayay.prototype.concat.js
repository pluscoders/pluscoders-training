Yayay.prototype.concat = function () {
    var newYayay = new Yayay

    for (var i = 0; i < this.length; i++) {
        newYayay[newYayay.length] = this[i]
        newYayay.length++
    }

    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Yayay)
            for (var j = 0; j < arguments[i].length; j++) {
                newYayay[newYayay.length] = arguments[i][j]
                newYayay.length++

            }
        else {
            newYayay[newYayay.length] = arguments[i]
            newYayay.length++
        }
    }
    return newYayay
}


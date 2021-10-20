Yayay.prototype.concat = function () {
    var newYayay = ''

    for (var i = 0; i < this.length; i++) {
        newYayay += this[i]

        if (i < this.length - 1)
            newYayay += ','
    }

    return newYayay
}

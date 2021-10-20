Yayay.prototype.join = function (separator) {
    var string = ''

    for (var i = 0; i < this.length; i++) {
        string += this[i]

        if (i < this.length - 1)
            string += separator
    }

    return string
}
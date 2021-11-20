Yayay.prototype.join = function (separator) {
    var string = ''

    separator = separator === undefined? ',' : separator

    for (var i = 0; i < this.length; i++) {
        string += this[i]

        if (i < this.length - 1)
            string += separator
    }

    return string
}
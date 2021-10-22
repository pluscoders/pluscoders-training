Yayay.prototype.indexOf = function (searchElement, fromIndex) {
    for (var i = fromIndex || 0; i < this.length; i++) {
        if (this[i] === searchElement)
            return i
    }

    return -1

}
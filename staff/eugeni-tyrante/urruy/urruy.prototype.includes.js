Urruy.prototype.includes = function (searchElement, fromIndex) {

    if (fromIndex > 0) {
        i = fromIndex
    }
    else {
        i = 0
    }

    for (var i; i < this.length; i++) {
        if (this[i] === searchElement) {
            return true
        }

    }

    return false
}
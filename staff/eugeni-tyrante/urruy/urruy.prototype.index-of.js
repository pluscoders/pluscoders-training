Urruy.prototype.indexOf = function (element, fromIndex) {

    if (fromIndex > 0) {
        i = fromIndex
    }
    else {
        i = 0
    }

    for (var i; i < this.length; i++) {
        if (this[i] === element) {
            return i
        }
    }
    return -1
}
Urruy.prototype.lastIndexOf = function (searchElement, fromIndex) {

    if (fromIndex != undefined) {
        var stop = fromIndex
    }
    else {
        var stop = 0
    }

    for (var i = this.length - 1; i > stop; i--) {
        var element = this[i]

        if (element === searchElement) {
            return i
        }
    }
    return -1
}
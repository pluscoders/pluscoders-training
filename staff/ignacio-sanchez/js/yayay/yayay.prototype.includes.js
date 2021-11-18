Yayay.prototype.includes = function (searchElement, fromIndex) {
    if (fromIndex === undefined) {
        fromIndex = 0
    }

    if (this.length + fromIndex < 0) {
        fromIndex = 0
    }

    for (var i = fromIndex; i < this.length; i++) {

        if (this[i] === searchElement){
            return true
        }
    }

    return false
}
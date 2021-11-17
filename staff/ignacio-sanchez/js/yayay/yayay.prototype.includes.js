Yayay.prototype.includes = function (searchElement, fromIndex) {
    if (fromIndex === undefined) {
        fromIndex = 0
    }

    if (fromIndex < 0) {
        fromIndex = this.length + fromIndex
    }

    for (var i = fromIndex; i < this.length; i++) {
        console.log(i)

        if (this[i] === searchElement){
            return true
        }
    }

    return false
}
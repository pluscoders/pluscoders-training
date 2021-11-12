Yayay.prototype.includes = function (searchElement, fromIndex) {
    
    if (fromIndex === undefined) {
        fromIndex = 0
    }
    if (fromIndex < 0) {
        fromIndex = this.length + start
    }
    for (var i = fromIndex; i < this.length; i++) {
        if (this[i] === searchElement){
            return true
        }
    }
    return false
}
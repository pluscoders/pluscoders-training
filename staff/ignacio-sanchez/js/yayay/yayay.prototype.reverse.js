Yayay.prototype.reverse = function () {
    
    var j = 0
    var last = this[this.length - 1]

    for (var i = this.length - 1; i >= 0; i--) {
        this[i] = this[j]
        j++
    }
    this[0] = last
    return this
}
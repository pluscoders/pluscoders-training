Yayay.prototype.shift = function () {
    var first = this[0]

    delete this[0]

    this.length --

    for (var i = 0 ; i < this.length ; i++) {
         this[i] = this[i+1]
        
    }
    delete this[i]
    return first
}
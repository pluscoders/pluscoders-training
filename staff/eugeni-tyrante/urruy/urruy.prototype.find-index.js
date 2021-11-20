Urruy.prototype.findIndex = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (callback(element, i, this)) 
            return i
    }
    return -1
}
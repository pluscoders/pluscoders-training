Urruy.prototype.find = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (callback(element, i, this)) 
            return element
    }
}
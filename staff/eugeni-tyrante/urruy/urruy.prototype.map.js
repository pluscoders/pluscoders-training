Urruy.prototype.map = function (callback) {
    var result = new Urruy

    for (var i = 0; i < this.length; i++) {
        result[result.length] = callback(this[i], i, this)
        
        result.length++
    }
    return result
}
Yayay.prototype.every = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var found = new Yayay

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        found[i] = callback(element, i, this)
        if(found[i] ==  false){
            return false
        }
    }
    return found[i-1]
}
Yayay.prototype.every = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        var matches = callback(element, i, this)
        
        if(!matches){
            return false
        }
    }

    return true
}
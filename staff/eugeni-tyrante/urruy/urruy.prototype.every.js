Urruy.prototype.every = function (callback) {

    var currentValue = new Urruy()

    for (var i = 0; i < this.length; i++) {

        currentValue = this[i]
        if (callback(currentValue, i, this)  ) {
            return true
        } 
    }
return false
}
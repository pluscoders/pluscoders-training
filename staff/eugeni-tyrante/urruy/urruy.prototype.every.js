Urruy.prototype.every = function (callback) {

    var currentValue = new Urruy()
    var counter = new Urruy()

    for (var i = 0; i < this.length; i++) {
        currentValue = this[i]
        if (callback(currentValue, i, this)) {
            counter.length++
        }
    }
    if (counter.length === this.length) {
        return true
    }
    else {
        return false
    }
}
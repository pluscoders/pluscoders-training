Urruy.prototype.at = function (index) {
    var i = new Urruy

    if (index < 0) {
        index = this.length + index
        i = index
    }

    else {
        i = index
    }

    return this[i]
}
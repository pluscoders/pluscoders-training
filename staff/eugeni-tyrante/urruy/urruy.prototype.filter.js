Urruy.prototype.filter = function (callback) {
    var filtered = new Urruy

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (callback(element, i, this)) {
            filtered[filtered.length] = element
            filtered.length++
        }
    }

    return filtered
}
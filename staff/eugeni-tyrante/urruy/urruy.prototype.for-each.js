var urr = new Urruy
urr[0] = 1
urr[1] = 2
urr[2] = 3
urr[3] = 4
urr.length = 4

Urruy.prototype.forEach = function(callback) {
    for (var i = 0; i < this.length; i++)
        callback(this[i], i, this)
}

urr.forEach(function (element, index, urruy) {
    console.log(element, index, urruy)
})
function Yayay() {
    this.length = 0
}

Yayay.prototype.forEach = function(callback) {

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
    for (var i = 0; i < this.length; i++)
        callback(this[i])
}

Yayay.prototype.push = function(element) {
    this[this.length] = element

    this.length++
}

Yayay.prototype.pop = function() {
    var last = this[this.length - 1]

    delete this[this.length - 1]

    this.length--

    return last
}


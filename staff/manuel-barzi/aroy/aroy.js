function Aroy() {
    for (var i = 0; i < arguments.length; i++)
        this[i] = arguments[i]

    this.length = arguments.length
}

Aroy.prototype.forEach = function(callback) {
    if (!(callback instanceof Function)) throw new TypeError(callback + ' is not a function')

    for (var i = 0; i < this.length; i++)
        callback(this[i], i, this)
}

Aroy.prototype.push = function(element) {
    this[this.length] = element

    this.length++
}
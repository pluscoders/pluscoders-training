function Yayay() {
    this.length = 0
}

Yayay.prototype.forEach = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (var i = 0; i < this.length; i++)
        callback(this[i], i, this)
}

Yayay.prototype.push = function (element) {
    this[this.length] = element

    this.length++
}

Yayay.prototype.pop = function () {
    var last = this[this.length - 1]

    delete this[this.length - 1]

    this.length--

    return last
}

Yayay.prototype.concat = function () {
    var newYayay = ''

    for (var i = 0; i < this.length; i++) {
        newYayay += this[i]

        if (i < this.length - 1)
            newYayay += ', '
    }

    return newYayay
}


Yayay.prototype.find = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (callback(element, i, this))
            return element
    }
}


Yayay.prototype.indexOf = function (searchElement, fromIndex) {
    for (var i = fromIndex || 0; i < this.length; i++) {
        if (this[i] === searchElement)
            return i
    }

    return -1

}

Yayay.prototype.map = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var newYayay = new Yayay

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        newYayay += callback(this[i])

        if (i < this.length - 1)
            newYayay += ', '


    }

    return newYayay
}

Yayay.prototype.join = function () {

}

// TODO reduce (do it standalone with arrays first, then reproduce it here with Yayay)
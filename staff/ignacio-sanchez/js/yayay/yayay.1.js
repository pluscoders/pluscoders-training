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
            newYayay += ','
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

        newYayay[i] = callback(element, i, this)
    }

    return newYayay
}

Yayay.prototype.join = function (separator) {
    var string = ''

    for (var i = 0; i < this.length; i++) {
        string += this[i]

        if (i < this.length - 1)
            string += separator
    }

    return string
}

Yayay.prototype.reduce = function (callback, initialValue) {

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    if (initialValue === undefined) {
        var accumulator = this[0]

        for (var i = 1; i < this.length; i++) {
            var currentValue = this[i]

            accumulator = callback(accumulator, currentValue, i, this)
        }

        return accumulator
    }

    else {
        accumulator = initialValue

        for (var i = 0; i < this.length; i++) {
            var currentValue = this[i]
            accumulator = callback(accumulator, currentValue, i, this)
        }
        return accumulator
    }
}






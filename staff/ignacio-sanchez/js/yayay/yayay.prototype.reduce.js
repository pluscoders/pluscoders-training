Yayay.prototype.reduce = function (callback, initialValue) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    if (initialValue === undefined) {
        var previousValue = this[0]

        for (var i = 1; i < this.length; i++) {
            var currentValue = this[i]

            previousValue = callback(previousValue, currentValue, i, this)
        }

        return previousValue
    }

    else {
        previousValue = initialValue

        for (var i = 0; i < this.length; i++) {
            var currentValue = this[i]
            previousValue = callback(previousValue, currentValue, i, this)
        }
        return previousValue
    }
}
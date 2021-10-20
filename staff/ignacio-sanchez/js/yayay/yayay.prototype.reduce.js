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
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
    Array.from(arguments)

    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i]
        this.length++
    }

    return this.length
}

Aroy.prototype.pop = function() {
    var result = this[this.length - 1]
    
    delete this[this.length - 1]

    this.length--

    return result
}

Aroy.prototype.reverse = function() {

    for (var i = 0; i < Math.floor(this.length / 2); i++) {
        var element = this[i]
        this[i] = this[this.length - 1 - i]
        this[this.length - 1 - i] = element
    }

    return this
}

Aroy.prototype.concat = function() {
    var result = new Aroy
    
    for (var i = 0; i < this.length; i++)
        result[i] = this[i]

    result.length = this.length
    
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            result[result.length] = arguments[i][j]
            result.length++
        }
    }

    return result
}

Aroy.prototype.includes = function(pattern, index) {
    if (!index) index = 0
    else if (index < 0) index += this.length

    var result = false

    for (var i = index; i < this.length; i++) {
        if (this[i] === pattern) {
            result = true
            break
        }
    }

    return result
}

Aroy.prototype.indexOf = function(pattern, index) {
    if (!index) index = 0
    else if (index < 0) index += this.length

    var result = -1

    for (var i = index; i < this.length; i++) {
        if (this[i] === pattern) {
            result = i
            break
        }
    }

    return result
}

Aroy.prototype.find = function(callback) {
    for (var i = 0; i < this.length; i++)
        if (callback(this[i], i, this)) return this[i]
}

Aroy.prototype.map = function(callback) {
    var result = new Aroy

    for (var i = 0; i < this.length; i++) {
        result[i] = callback(this[i], i, this)
        result.length++
    }
    
    return result
}

Aroy.prototype.filter = function(callback) {
    var result = new Aroy
    result.length = 0

    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result[result.length] = this[i]
            result.length++
        }
    }
    
    return result
}

Aroy.prototype.slice = function(from, to) {
    var result = new Aroy

    if (!to || to > this.length) to = this.length

    if (!from) from = 0
    else if (from < 0) from += this.length

    if (from < this.length) {
        for (var i = from; i < to; i++) {
            result[result.length] = this[i]
            result.length++
        }
    }

    return result
}

Aroy.prototype.splice = function(from) {
// debugger
    if (from < 0) from += this.length

    var count
    if (typeof arguments[1] === 'number') {
        count = arguments[1]
        var  i = 2
        if (count > this.length - from)
            count = this.length - from
    } else {
        count = this.length - from
        var i = 1
    }

    var result = []
    var copy = []
    
    for (var j = from; j < this.length; j++) {
        if (j < from + count)
            result[result.length] = this[j]
        else
            copy[copy.length] = this[j]
        
        delete this[j]
    }

    this.length = from

    for (var m = i; m < arguments.length; m++) {
        this[this.length] = arguments[m]
        this.length++
    }

    for (var n = 0; n < copy.length; n++) {
        this[this.length] = copy[n]
        this.length++
    }
    
    return result
}


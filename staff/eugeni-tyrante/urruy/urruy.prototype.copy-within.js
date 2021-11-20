Urruy.prototype.copyWithin = function (target, start, end) {

    if (start === undefined) {
        start = 0
    }

    if (end === undefined) {
        end = this.length
    }

    var j = target

    for (var i = start; i < end; i++) {
        this[j] = this[i]
        j++
    }
    
    return this
}
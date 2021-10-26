Yayay.prototype.concat = function () {
    var newYayay = new Yayay

    for (var i = 0; i < this.length; i++) {
        newYayay[newYayay.length] = this[i]
        newYayay.length++
    }
    
    for (var i = 0; i < arguments.length; i++) {
        if (arguments instanceof Object)
            for (var j = 0; j < arguments[i].length; j++) {
                newYayay[newYayay.length] = arguments[i][j]
                newYayay.length++

            }
            // newYayay[newYayay.length] = arguments[i]
    }
    return newYayay
}


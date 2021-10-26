Yayay.prototype.constructor = function () {
    //this.length = 0

    for (var i = 0; i < arguments.length; i++) {

        if (Array.isArray(arguments[i]))
            for (var j = 0; j < arguments[i].length; j++) {
                y[y.length] = arguments[i][j]
            }
        else y[y.length] = arguments[i]
    }

    return y
}

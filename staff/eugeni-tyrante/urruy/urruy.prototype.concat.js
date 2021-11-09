Urruy.prototype.concat = function () {

    var concatenated = new Urruy
    concatenated = this

    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Urruy) {
            var trurruy = arguments[i]

            for (var j = 0; j < trurruy.length; j++) {
                var curruy = trurruy[j]
                concatenated[concatenated.length] = curruy
                concatenated.length++
            }
        }
        else {
            concatenated[concatenated.length] = arguments[i]
            concatenated.length++
        }
    }

    return this

}
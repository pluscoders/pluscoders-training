Yayay.prototype.concat = function () {
    // SEE concat.js
    debugger
    // TODO create new yayay to return all values concatenated
    var newYayay = new Yayay


    // TODO iterate on this yayay to extract its values and add them to the new yayay
    // TODO iterate on the yayay passed as argument and extracts its values and add them to the new yayay
    // TODO return the new yayay

    // function concat(array) { // WARN use arguments to support n input arrays!
    //    if (!Array.isArray(array)) throw new TypeError(array + ' is not a array')

    for (var i = 0; i < this.length; i++) {
        newYayay[newYayay.length] = this[i]
        newYayay.length++
    }


for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
        newYayay[newYayay.length] = arguments[i][j]
        newYayay.length++

    }

}

return newYayay

}


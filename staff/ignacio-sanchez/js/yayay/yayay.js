function Yayay() {
    this.length = 0

    for (var i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i]))
            for (var j = 0; j < arguments[i].length; j++) {
                this[this.length] = arguments[i][j]
                this.length++
            }
        else {
            this[this.length] = arguments[i]
            this.length++
        }
    }
}
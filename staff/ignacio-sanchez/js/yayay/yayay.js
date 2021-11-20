function Yayay() {
    if (arguments.length === 1 && typeof arguments[0] === 'number') {
        this.length = arguments[0]
    } else {
        this.length = 0

        for (var i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i]
            this.length++
        }
    }

}
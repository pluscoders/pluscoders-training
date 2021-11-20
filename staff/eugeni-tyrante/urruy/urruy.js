function Urruy() {

    if (arguments.length === 0) {
        this.length = 0
    }

    if (arguments.length === 1 && arguments[0] > 0) {
        this.length = arguments[0]
    }

    else {
        for (var i = 0; i < arguments.length; i++) {
            this.length = arguments.length
            this[i] = arguments[i]
        }
    }
}
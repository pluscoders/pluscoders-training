Yayay.prototype.sort = function (callback) {
    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < this.length - i - 1; j++) {
            var res = 0

            if (callback)
                res = callback(this[j], this[j + 1])
            else if (this[j] + '' > this[j + 1] + '')
                res = 1

            if (res > 0) {
                var temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }

    return this
}


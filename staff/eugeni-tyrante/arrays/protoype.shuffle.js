var arr1 = [1, 2, 3, 4, 5]

Array.prototype.shuffle = function() {

    for (var i = 0; i < this.length; i++) {

        var rand1 = [Math.floor(Math.random() * this.length)];
        var rand2 = [Math.floor(Math.random() * this.length)];
        var tem1 = this[rand1]
        var tem2 = this[rand2]

        if (tem1 !== tem2) {
            this[rand1] = tem2
            this[rand2] = tem1
        }

    }
    return this
}

arr1.shuffle()
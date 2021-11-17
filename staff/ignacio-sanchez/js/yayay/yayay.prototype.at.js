Yayay.prototype.at = function (index) {
    // if (index >= 0) {
    //     for (var i = 0; i < this.length; i++) {
    //         if ([i] == index)
    //             return this[i]
    //     }
    // }

    // if (index < 0) {
    //     for (var i = this.length - 1; i >= 0; i--) {
    //         if ([i] == this.length + index)
    //             return this[i]
    //     }
    // }

    if (index < 0)
        index = this.length + index
    
    return this[index]
}
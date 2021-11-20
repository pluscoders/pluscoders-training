Urruy.prototype.splice = function (start, deleteCount, element) {

    var removed = new Urruy
    var count = this.length

    if (start > this.length) {
        start = this.length
    }

    if (start < 0) {
        start = this.length + start
    }

    if (this.length + start === 0) {
        start = 0
    }

    if (deleteCount > this.length - start) {
        deleteCount = this.length
    }

    for (var i = start; i < this.length + 1; i++) {
        if (deleteCount > 0 && i === start && element !== undefined) {
            removed[removed.length] = this[i]
            this[i] = element
            removed.length++
        }

        if (deleteCount > 0 && i === start && element === undefined) {
            removed[removed.length] = this[i]
            removed.length++

            if (this[i + deleteCount] !== undefined) {
                this[i] = this[i + deleteCount]
            }
        }

        if (deleteCount > 0 && i > start && i < this.length && removed.length < deleteCount) {
            removed[removed.length] = this[i]
            this[i] = this[i + deleteCount - 1]
            removed.length++
        }

        if (deleteCount > 0 && i === this.length && element === undefined) {
            this.length = this.length - deleteCount
        }

        if (deleteCount > 0 && i === this.length && element !== undefined) {
            this.length = this.length - deleteCount + 1
        }

        if (deleteCount < 1 && i === start) {
            removed[removed.length] = this[i]
            removed.length++
        }

        if (deleteCount < 1 && i > start && count > start) {
            this[count] = this[count - 1]
            count--
        }

        if (deleteCount < 1 && i > start && count === start) {
            this[start] = element
        }
    }

    return removed
}
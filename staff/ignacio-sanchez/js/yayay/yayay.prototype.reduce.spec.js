describe('reduce', function () {
    it('should executes a user-supplied "reducer" callback function on each elemento the array, passing in the return value from the calculation, resulting the reducer across all elements of the array in a single value', function () {
        var y = new Yayay

        var previousValue = 0

        y[0] = 1.25
        y[1] = 2.50
        y[2] = 3.75
        y.length = 3

        var previousValue = y.reduce(function (previousValue, currentValue, currentIndex, array) {
            return previousValue * currentValue
        })

        expect(previousValue).toBe(1.25 * 2.50 * 3.75)
        expect(y.length).toEqual(3)
    })
    it('should executes a user-supplied "reducer" callback function on each elemento the array, passing in the return value from the calculation, resulting the reducer across all elements of the array in a single value', function () {
        var y = new Yayay

        var previousValue = 0
        var initialValue = 2

        y[0] = 1
        y[1] = 2
        y[2] = 3
        y.length = 3

        var previousValue = y.reduce(function (previousValue, currentValue, currentIndex, array) {
            return previousValue + currentValue
        }, initialValue)

        expect(previousValue).toBe(2+ 1+ 2 + 3)
        expect(y.length).toEqual(3)
    })

})

//previousValue is the accumulator 
describe('reduce', function () {
    it('should executes a user-supplied "reducer" callback function on each elemento the array, passing in the return value from the calculation, resulting the reducer across all elements of the array in a single value', function () {
        var y = new Yayay

        var accumulator = 0

        y[0] = 1.25
        y[1] = 2.50
        y[2] = 3.75
        y.length = 3

        var accumulator = y.reduce(function (accumulator, currentValue, currentIndex, array) {
            return accumulator * currentValue
        })

        expect(accumulator).toBe(1.25 * 2.50 * 3.75)
        expect(y.length).toEqual(3)
    })

})
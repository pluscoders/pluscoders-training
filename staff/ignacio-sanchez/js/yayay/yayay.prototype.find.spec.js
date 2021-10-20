describe('find', function () {
    it('should return the value of the first element in the provided array that satisfies the provided testing function', function () {
        var y = new Yayay

        y[0] = 5
        y[1] = 12
        y[2] = 8
        y[3] = 130
        y[4] = 44
        y[5] = 53
        y.length = 6

        var found = y.find(function (element) {
            return element > 10
        })

        expect(found).toBe(12)

    })

})
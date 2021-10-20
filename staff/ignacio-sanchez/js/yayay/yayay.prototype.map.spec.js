describe('map', function () {
    it('should create a new array with the results of a calling provided function', function () {
        var y = new Yayay


        y[0] = 2
        y[1] = 4
        y[2] = 8
        y.length = 3

        var newYayay = y.map(function (element) {
            return element * 2
        })

        expect(newYayay[0]).toBe(4)
        expect(newYayay[1]).toBe(8)
        expect(newYayay[2]).toBe(16)

    })

})
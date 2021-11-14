describe('at', function () {
    it('should return the index of an integer', function () {
        var y = new Yayay

        y[0] = 5
        y[1] = 12
        y[2] = 8
        y[3] = 130
        y[4] = 44
        y.length = 5

       found = y.at(2)

        expect(found).toBe(8)

    })
    it('should return the index of an integer', function () {
        var y = new Yayay

        y[0] = 5
        y[1] = 12
        y[2] = 8
        y[3] = 130
        y[4] = 44
        y.length = 5

       found = y.at(-2)

        expect(found).toBe(130)

    })


})
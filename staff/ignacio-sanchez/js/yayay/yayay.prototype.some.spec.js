describe('some', function () {
    it('should return true after at least one element in the array passes the test implemented by the provided function', function () {
        var y = new Yayay

        y[0] = 1
        y[1] = 2
        y[2] = 3
        y[3] = 4
        y[4] = 5
        y.length = 5
        
        var found = y.some(function (element) {
            if (element % 2 === 0)
                return true
        })

        expect(found).toBeTrue()
    })

    it('should return false after at least one element in the array passes the test implemented by the provided function', function () {
        var y = new Yayay

        y[0] = 1
        y[1] = 2
        y[2] = 3
        y[3] = 4
        y[4] = 5
        y.length = 5
        
        var found = y.some(function (element) {
            if (element % 6 === 0)
                return true
        })

        expect(found).toBeFalse()
    })
})

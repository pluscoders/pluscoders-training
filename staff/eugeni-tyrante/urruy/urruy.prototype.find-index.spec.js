describe('find-index', function () {
    it('should return the index of the first element in the provided urruy that satisfies the provided testing function', function () {
        var urr = new Urruy(1, 5, 15, 20)

        var r = urr.findIndex(function (element) {
            return element > 12
        })

        expect(r).toBe (2)
    })

    it('should return -1 if none of the arguments satisfies the provided testing function', function () {
        var urr = new Urruy(1, 5, 15, 20)
        
        var r = urr.findIndex(function (element) {
            return element > 20
        })

        expect(r).toBe (-1)
    })

    it('should return the index of the first element in the provided urruy that satisfies the provided testing function', function () {
        var urr = new Urruy(1, 5, 15, 20)

        var r = urr.findIndex(function (element) {
            return element < 14
        })

        expect(r).toBe (0)
    })
})
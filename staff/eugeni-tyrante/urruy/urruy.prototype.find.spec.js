describe('find', function () {
    it('should return the value of the first element in the provided urruy that satisfies the provided testing function', function () {
        var urr = new Urruy(1, 5, 15, 20)

        var r = urr.find(function (element) {
            return element > 12
        })

        expect(r).toBe (15)
    })

    it('should return the value of the first element in the provided urruy that satisfies the provided testing function', function () {
        var urr = new Urruy(1, 5, 15, 20)
        
        var r = urr.find(function (element) {
            return element > 20
        })

        expect(r).toBe (undefined)
    })
})
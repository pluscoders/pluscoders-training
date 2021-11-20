describe('reduce', function() {
    it('should return the sum of all the elements in the provided Urruy', function() {
        var urr = new Urruy(1, 2, 3, 4)

        var r = urr.reduce (function callback (accumulator, currentValue) {
            return accumulator + currentValue
        })

        expect(r).toBe (10)
    })
})
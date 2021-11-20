describe('some', function () {
    it('should return true if it matches with the condition provided in the callback', function () {
        var urr = new Urruy(12, 25, 56, 98, 125)

        var r = urr.some(function callback(element, i, urruy) {
            if (element > 111) {
                return true
            }
        })

        expect(r).toBe(true)
    })

    it('should return false if it doesnt match with the condition provided in the callback', function () {
        var urr = new Urruy(12, 25, 56, 98, 125)

        var r = urr.some(function callback(element, i, urruy) {
            if (element < 11) {
                return true
            }
        })

        expect(r).toBe(false)
    })

    it('should return true if it matches with the length provided in the callback', function () {
        var urr = new Urruy(12, 25, 56, 98, 125)

        var r = urr.some(function callback(element, i, urruy) {
            if (urruy.length > 4) {
                return true
            }
        })

        expect(r).toBe(true)
    })
})
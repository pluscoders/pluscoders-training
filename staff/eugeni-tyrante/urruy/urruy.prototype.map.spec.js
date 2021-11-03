describe('map', function () {
    it('should return a new urruy with the elements processed by the callback', function () {
        var urr = new Urruy(1, 5, 15, 20)

        var r = urr.map(function (element) {
            return element * 2
        })

        expect(r.length).toBe (urr.length)
        expect(r[0]).toBe (2)
        expect(r[1]).toBe (10)
        expect(r[2]).toBe (30)
        expect(r[3]).toBe (40)
    })

    it('should return a new urruy with the elements processed by the callback', function () {
        var urr = new Urruy(1, 5, 15, 20)

        var r = urr.map(function (element) {
            return element + 10
        })

        expect(r.length).toBe (urr.length)
        expect(r[0]).toBe (11)
        expect(r[1]).toBe (15)
        expect(r[2]).toBe (25)
        expect(r[3]).toBe (30)
    })
})
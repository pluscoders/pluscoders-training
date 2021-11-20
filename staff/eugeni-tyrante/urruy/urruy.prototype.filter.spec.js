describe('filter', function () {
    it('should create a new array with the elements that pass the defined filter', function () {
        var urr = new Urruy(1, 2, 3, 4, 5)

        var r = urr.filter(function (element, i, urruy) {
            if (element > 3)
                return true
        })

        expect(r instanceof Urruy).toBeTrue()
        expect(r.length).toBe(2)
        expect(r[0]).toBe(4)
        expect(r[1]).toBe(5)
    })
})
describe('reverse', function () {
    it('should reverse the urruy in place and return it', function () {

        var urr = new Urruy(1, 2, 3, 4)

        var r = urr.reverse()

        expect(r.length).toBe(urr.length)
        expect(r[0]).toBe (4)
        expect(r[1]).toBe (3)
        expect(r[2]).toBe (2)
        expect(r[3]).toBe (1)
    })
})
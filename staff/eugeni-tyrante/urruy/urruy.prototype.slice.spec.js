describe('slice', function () {
    it('should return the three elements from the Urruy from the 0 position to the 2 postion in a new Urruy', function () {
        var urr = new Urruy(1, 2, 3, 4, 5)

        var r = urr.slice(0, 3)

        expect(r[0]).toBe(1)
        expect(r[1]).toBe(2)
        expect(r[2]).toBe(3)
        expect(urr[0]).toBe(1)
        expect(urr[1]).toBe(2)
        expect(urr[2]).toBe(3)
        expect(urr[3]).toBe(4)
        expect(urr[4]).toBe(5)
        expect(urr.length).toBe(5)
    })

    it('should should return the elements from the Urruy from the 2 position to the last postion in a new Urruy', function () {
        var urr = new Urruy (1, 2, 3, 4, 5)

        var r = urr.slice(2, 50)

        expect(r[0]).toBe(3)
        expect(r[1]).toBe(4)
        expect(r[2]).toBe(5)
        expect(urr[0]).toBe(1)
        expect(urr[1]).toBe(2)
        expect(urr[2]).toBe(3)
        expect(urr[3]).toBe(4)
        expect(urr[4]).toBe(5)
        expect(urr.length).toBe(5)
    })
})
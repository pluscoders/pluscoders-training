describe('constructor', function() {
    it('should construct an empty instance of urruy', function() {
        var urr = new Urruy

        expect(urr instanceof Urruy).toBeTrue()
        expect(urr.length).toBe(0)
    })

    it('should construct a filled instance of urruy when more than one value is sent as a parameter', function() {
        var urr = new Urruy(1, 2, 3, 4, 5)

        expect(urr instanceof Urruy).toBeTrue()
        expect(urr.length).toBe(5)
        expect(urr[0]).toBe(1)
        expect(urr[1]).toBe(2)
        expect(urr[2]).toBe(3)
        expect(urr[3]).toBe(4)
        expect(urr[4]).toBe(5)
    })

    it('should construct a filled instance of urruy with one item when one integer number is sent as parameter', function() {
        var urr = new Urruy(10)

        expect(urr instanceof Urruy).toBeTrue()
        expect(urr.length).toBe(10)
    })
})
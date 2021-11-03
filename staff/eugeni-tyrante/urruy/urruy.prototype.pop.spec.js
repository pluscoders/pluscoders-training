describe('pop', function () {
    it('should remove the last element of the provided Urruy and returns that element', function () {

        var urr = new Urruy(1, 2, 3, 4)

        var r = urr.pop()

        expect(urr.length).toBe(3)
        expect(urr[0]).toBe(1)
        expect(urr[1]).toBe(2)
        expect(urr[2]).toBe(3)
        expect(r).toBe(4)

    })
})
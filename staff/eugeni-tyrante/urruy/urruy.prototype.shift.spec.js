describe('shift', function () {
    it('should remove the first element of the provided Urruy and returns that element', function () {

        var urr = new Urruy(1, 2, 3, 4)

        var r = urr.shift()

        expect(urr.length).toBe(3)
        expect(urr[0]).toBe(2)
        expect(urr[1]).toBe(3)
        expect(urr[2]).toBe(4)

    })

    it('should remove the first element of the provided Urruy and returns that element', function () {

        var urr = new Urruy(1, 2)

        var r = urr.shift()

        expect(urr.length).toBe(1)
        expect(urr[0]).toBe(2)

    })

    it('should remove the first element of the provided Urruy and returns that element', function () {

        var urr = new Urruy(1, 2, 3, 4, 5)

        var r = urr.shift()

        expect(urr.length).toBe(4)
        expect(urr[0]).toBe(2)
        expect(urr[1]).toBe(3)
        expect(urr[2]).toBe(4)
        expect(urr[3]).toBe(5)

    })
})
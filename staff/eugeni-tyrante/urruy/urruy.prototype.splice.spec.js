describe('splice', function () {
    it('should return the elements of the provided Urruy from the postion 1 to the postion 3 and remove those elements from the original Urruy', function () {
        var urr = new Urruy(1, 2, 3, 4, 5)

        var r = urr.splice(1, 3)

        expect(r[0]).toBe(2)
        expect(r[1]).toBe(3)
        expect(r[2]).toBe(4)
        expect(urr[0]).toBe(1)
        expect(urr[1]).toBe(5)
        expect(urr.length).toBe(2)
    })

    it('should return the elements of the provided Urruy from the postion 1 to the postion 3 and remove those elements from the original Urruy and insert the element in the position 1', function () {
        var urr = new Urruy(1, 2, 3, 4, 5)

        var r = urr.splice(1, 3, 'hola')

        expect(r[0]).toBe(2)
        expect(r[1]).toBe(3)
        expect(r[2]).toBe(4)
        expect(urr[0]).toBe(1)
        expect(urr[1]).toBe('hola')
        expect(urr[2]).toBe(5)
        expect(urr.length).toBe(3)
    })
})
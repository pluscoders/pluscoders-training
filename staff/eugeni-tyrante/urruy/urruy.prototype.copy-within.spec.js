describe('copyWithin', function() {
    it ('should return the original urruy with the copied elements starting from the target', function () {
        var urr = new Urruy ('a', 'b', 'c', 'd', 'e')

        urr.copyWithin(1, 3)

        expect(urr.length).toBe(5)
        expect(urr[0]).toBe('a')
        expect(urr[1]).toBe('d')
        expect(urr[2]).toBe('e')
        expect(urr[3]).toBe('d')
        expect(urr[4]).toBe('e')
    })

    it ('should return the original urruy with the copied elements starting from the target', function () {
        var urr = new Urruy ('a', 'b', 'c', 'd', 'e')

        urr.copyWithin(0, 3, 5)

        expect(urr.length).toBe(5)
        expect(urr[0]).toBe('d')
        expect(urr[1]).toBe('e')
        expect(urr[2]).toBe('c')
        expect(urr[3]).toBe('d')
        expect(urr[4]).toBe('e')
    })

    it ('should return the original urruy with the copied elements starting from the target', function () {
        var urr = new Urruy ('a', 'b', 'c', 'd', 'e')

        urr.copyWithin(2, 1, 2)

        expect(urr.length).toBe(5)
        expect(urr[0]).toBe('a')
        expect(urr[1]).toBe('b')
        expect(urr[2]).toBe('b')
        expect(urr[3]).toBe('d')
        expect(urr[4]).toBe('e')
    })

})
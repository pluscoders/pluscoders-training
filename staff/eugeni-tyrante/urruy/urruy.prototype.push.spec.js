describe('push', function() {
    it('should add one element at the end of the urruy', function() {
        var urr = new Urruy

        urr.push('a')

        expect(urr.length).toBe(1)
        expect(urr[0]).toBe('a')
    })

    it('should add more than one element at the end of the urruy', function() {
        var urr = new Urruy

        urr.push('a', 'b', 'c', 'd', 'e', 'f')

        expect(urr.length).toBe(6)
        expect(urr[0]).toBe('a')
        expect(urr[1]).toBe('b')
        expect(urr[2]).toBe('c')
        expect(urr[3]).toBe('d')
        expect(urr[4]).toBe('e')
        expect(urr[5]).toBe('f')
    })
})
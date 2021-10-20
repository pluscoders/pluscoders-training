describe('concat', function () {
    it('should merge two or more arrays into a new array', function () {
        var y = new Yayay

        y[0] = 'a'
        y[1] = 'b'
        y[2] = 'c'
        y[3] = 'd'
        y[4] = 'e'
        y[5] = 'f'
        y.length = 6

        var newYayay = y.concat()

        expect(newYayay).toBe('a,b,c,d,e,f')

    })
})

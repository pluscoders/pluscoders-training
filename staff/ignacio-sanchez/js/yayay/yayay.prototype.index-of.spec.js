describe('indexOf', function () {
    it('should return the index within the calling string object of the first occurrance of the specified value, starting at fromIndex', function () {
        var y = new Yayay

        y[0] = 'ant'
        y[1] = 'bison'
        y[2] = 'camel'
        y[3] = 'duck'
        y[4] = 'bison'
        y.length = 5

        var index = y.indexOf('bison', 0)

        expect(index).toBe(1)
        expect(y[0]).toBe('ant')
        expect(y[1]).toBe('bison')
        expect(y[2]).toBe('camel')
        expect(y[3]).toBe('duck')
        expect(y[4]).toBe('bison')

    })

})
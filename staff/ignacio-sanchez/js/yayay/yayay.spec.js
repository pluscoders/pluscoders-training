describe('constructor', function () {
    it('should instantiate a Yayay with length 0 by default', function () {
        var y = new Yayay

        expect(y instanceof Yayay).toBeTrue()
        expect(y.length).toEqual(0)
    })

    it('should construct a filled instance of yayay when more than a one value is sent a a parameter', function(){
        var y = new Yayay(1,2,3)

        expect(y instanceof Yayay).toBeTrue()
        expect(y.length).toEqual(3)
        expect(y[0]).toBe(1)
        expect(y[1]).toBe(2)
        expect(y[2]).toBe(3)
    })

    it('should set the array length from a single instance of yayay when only one number is sent as a parameter', function(){
        var y = new Yayay(10)

        expect(y instanceof Yayay).toBeTrue()
        expect(y.length).toEqual(10)
    })


    it('should construct a filled instance of yayay when more than a one value is sent a a parameter', function(){
        var y = new Yayay('a','b','c')

        expect(y instanceof Yayay).toBeTrue()
        expect(y.length).toEqual(3)
        expect(y[0]).toBe('a')
        expect(y[1]).toBe('b')
        expect(y[2]).toBe('c')
    })

    it('should construct a single instance of yayay when only one text is sent as a parameter', function(){
        var y = new Yayay('x')

        expect(y instanceof Yayay).toBeTrue()
        expect(y.length).toEqual(1)
        expect(y[0]).toBe('x')
    })
})


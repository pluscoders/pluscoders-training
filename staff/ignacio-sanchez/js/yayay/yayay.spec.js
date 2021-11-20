describe('constructor', function () {
    it('should instantiate a Yayay with length 0 by default', function () {
        var y = new Yayay

        expect(y instanceof Yayay).toBeTrue()
        expect(y.length).toEqual(0)
    })

    it('should construct a filled instance of yayay when more than a one value is sent a a parameter', function () {
        var y = new Yayay(100, 101, 102, 103, 104, 105)

        expect(y instanceof Yayay).toBeTrue()
        expect(y.length).toEqual(6)
        expect(y[0]).toBe(100)
        expect(y[1]).toBe(101)
        expect(y[2]).toBe(102)
        expect(y[3]).toBe(103)
        expect(y[4]).toBe(104)
        expect(y[5]).toBe(105)
    })

    it('should set the array length from a single instance of yayay when only one number is sent as a parameter', function () {
        var y = new Yayay(10)

        expect(y instanceof Yayay).toBeTrue()
        expect(y.length).toEqual(10)
    })


    it('should construct a filled instance of yayay when more than a one value is sent a a parameter', function () {
        var y = new Yayay('a', 'b', 'c')

        expect(y instanceof Yayay).toBeTrue()
        expect(y.length).toEqual(3)
        expect(y[0]).toBe('a')
        expect(y[1]).toBe('b')
        expect(y[2]).toBe('c')
    })

    it('should construct a single instance of yayay when only one text is sent as a parameter', function () {
        var y = new Yayay('x')

        expect(y instanceof Yayay).toBeTrue()
        expect(y.length).toEqual(1)
        expect(y[0]).toBe('x')
    })

    it('should initialize instance with length indicated by single numeric argument', function () {
        var y = new Yayay(5)

        expect(y instanceof Yayay).toBeTrue()
        expect(y.length).toEqual(5)
        expect(y[0]).toBeUndefined()
        expect(y[1]).toBeUndefined()
        expect(y[2]).toBeUndefined()
        expect(y[3]).toBeUndefined()
        expect(y[4]).toBeUndefined()
    })
})


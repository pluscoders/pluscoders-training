describe('constructor', function () {
    it('should instantiate a Yayay with length 0 by default', function () {
        var y = new Yayay

        expect(y instanceof Yayay).toBeTrue()
        expect(y.length).toEqual(0)
    })
})


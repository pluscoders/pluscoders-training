describe('pop', function () {
    it('should pop one element', function () {
        var y = new Yayay

        y[0] = 'hola'
        y[1] = 'mundo'
        y.length = 2

        var last = y.pop()

        expect(y.length).toEqual(1)
        expect(y[0]).toEqual('hola')
        expect(last).toEqual('mundo')
    })
})
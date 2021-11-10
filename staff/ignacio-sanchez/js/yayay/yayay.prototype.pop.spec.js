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
    it('should pop one element', function () {
        var y = new Yayay

        y[0] = 'onion'
        y[1] = 'carrot'
        y[2] = 'vegetable'
        y.length = 3

        var last = y.pop()

        expect(y.length).toEqual(2)
        expect(y[0]).toEqual('onion')
        expect(y[1]).toEqual('carrot')
        expect(last).toEqual('vegetable')
    })
    it('should pop one element', function () {
        var y = new Yayay

        y[0] = 22
        y[1] = 'binance'
        y.length = 2

        var last = y.pop()

        expect(y.length).toEqual(1)
        expect(y[0]).toEqual(22)
        expect(last).toEqual('binance')
    })
})
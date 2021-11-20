describe('reverse', function () {
    it('should reverse an array in place, the last element becomes the first, ant the last becomes the first', function () {
        var y = new Yayay

        y[0] = 'one'
        y[1] = 'two'
        y[2] = 'three'
        y.length = 3

        y.reverse()

        expect(y.length).toEqual(3)
        expect(y[0]).toEqual('three')
        expect(y[1]).toEqual('two')
        expect(y[2]).toEqual('one')
    })
    it('should reverse an array in place, the last element becomes the first, ant the last becomes the first', function () {
        var y = new Yayay

        y[0] = 'one'
        y[1] = 'two'
        y[2] = 'three'
        y[3] = 'four'
        y[4] = 'five'
        y.length = 5

        y.reverse()

        expect(y.length).toEqual(5)
        expect(y[0]).toEqual('five')
        expect(y[1]).toEqual('four')
        expect(y[2]).toEqual('three')
        expect(y[3]).toEqual('two')
        expect(y[4]).toEqual('one')
    })

})
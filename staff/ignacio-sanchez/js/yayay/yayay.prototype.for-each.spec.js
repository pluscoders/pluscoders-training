describe('forEach', function () {
    it('should iterate the same function for each element', function () {
        var y = new Yayay

        y[0] = 'paper'
        y[1] = 'shirt'
        y[2] = 'ovni'
        y.length = 3

        var elements = []
        var yayays = []

        y.forEach(function (element, index, yayay) {
            elements[index] = element
            yayays[index] = yayay
        })

        expect(y.length).toEqual(3)
        expect(y[0]).toEqual('paper')
        expect(y[1]).toEqual('shirt')
        expect(y[2]).toEqual('ovni')

        expect(elements[0]).toEqual('paper')
        expect(elements[1]).toEqual('shirt')
        expect(elements[2]).toEqual('ovni')

        expect(yayays[0]).toEqual(y)
        expect(yayays[1]).toEqual(y)
        expect(yayays[2]).toEqual(y)
    })
})







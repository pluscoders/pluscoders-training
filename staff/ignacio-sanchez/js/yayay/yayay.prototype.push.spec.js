describe('push', function () {
    it('should push one element', function () {
        var y = new Yayay

        y.push('hola mundo')

        expect(y.length).toEqual(1)
        expect(y[0]).toEqual('hola mundo')
    })
})




describe('shift', function () {
    it('should shift the first element of the array', function () {
        var y = new Yayay

        y[0] = 1
        y[1] = 2
        y[2] = 3
        y.length = 3

        var first = y.shift()

        expect(y.length).toEqual(2)
        expect(y[0]).toEqual(2)
        expect(y[1]).toEqual(3)
        expect(first).toEqual(1)
    })
    it('should shift the first element of the array', function () {
        var y = new Yayay

        y[0] = 'angel'
        y[1] = 'clown'
        y[2] = 'mandarin'
        y[3] = 'surgeon'
        y.length = 4

        var first = y.shift()

        expect(y.length).toEqual(3)
        expect(y[0]).toEqual('clown')
        expect(y[1]).toEqual('mandarin')
        expect(y[2]).toEqual('surgeon')
        expect(first).toEqual('angel')
    })
    
})
describe('Yayay', function() {
    describe('constructor', function() {
        it('should instantiate a Yayay with length 0 by default', function() {
            var y = new Yayay

            expect(y instanceof Yayay).toBeTrue()
            expect(y.length).toEqual(0)
        })
    })

    describe('push', function() {
        it('should push one element', function() {
            var y = new Yayay

            y.push('hola mundo')

            expect(y.length).toEqual(1)
            expect(y[0]).toEqual('hola mundo')
        })
    })

    describe('pop', function() {
        it('should pop one element', function() {
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

    describe('forEach', function() {
        // TODO for Iñakis! ;)
    })
})
describe('Yayay', function () {
    describe('constructor', function () {
        it('should instantiate a Yayay with length 0 by default', function () {
            var y = new Yayay

            expect(y instanceof Yayay).toBeTrue()
            expect(y.length).toEqual(0)
        })
    })

    describe('push', function () {
        it('should push one element', function () {
            var y = new Yayay

            y.push('hola mundo')

            expect(y.length).toEqual(1)
            expect(y[0]).toEqual('hola mundo')
        })
    })

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

    describe('forEach', function () {
        it('should iterate the same function for each element', function () {
            var y = new Yayay

            y[0] = 'paper'
            y[1] = 'shirt'
            y[2] = 'ovni'

            var callback = y.forEach

            expect(y[0]).toEqual('paper')
            expect(y[1]).toEqual('shirt')
            expect(y[2]).toEqual('ovni')
        })
    })

    describe('concat', function () {
        it('should merge two or more arrays into a new array', function () {
            var y = new Yayay

            y[0] = 'a'
            y[1] = 'b'
            y[2] = 'c'
            y[3] = 'd'
            y[4] = 'e'
            y[5] = 'f'
            y.length = 6

            var newYayay = y.concat()

            expect(newYayay).toBe('a, b, c, d, e, f')

        })
    })

    describe('find', function () {
        it('should return the value of the first element in the provided array that satisfies the provided testing function', function () {
            var y = new Yayay
            debugger
            y[0] = '5'
            y[1] = '12'
            y[2] = '8'
            y[3] = '130'
            y[4] = '44'
            y[5] = '53'
            y.length = 6

            var found = y.find(function (element){
                return element > 10
        })

        expect(found).toBe('12')

    })
})    
})
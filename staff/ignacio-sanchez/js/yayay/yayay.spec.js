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
            y.length = 3

            var elements = []
            var yayays = []

            y.forEach(function(element, index, yayay) {
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

            y[0] = 5
            y[1] = 12
            y[2] = 8
            y[3] = 130
            y[4] = 44
            y[5] = 53
            y.length = 6

            var found = y.find(function (element) {
                return element > 10
            })

            expect(found).toBe(12)

        })

    })

    describe('indexOf', function () {
        it('should return the index within the calling string object of the first occurrance of the specified value, starting at fromIndex', function () {
            var y = new Yayay

            y[0] = 'ant'
            y[1] = 'bison'
            y[2] = 'camel'
            y[3] = 'duck'
            y[4] = 'bison'
            y.length = 5

            var index = y.indexOf('bison', 0)

            expect(index).toBe(1)
            expect(y[0]).toBe('ant')
            expect(y[1]).toBe('bison')
            expect(y[2]).toBe('camel')
            expect(y[3]).toBe('duck')
            expect(y[4]).toBe('bison')

        })

    })

    describe('map', function () {
        it('should create a new array with the results of a calling provided function', function () {
            var y = new Yayay

            y[0] = 2
            y[1] = 4
            y[2] = 8
            y.length = 3

            var newYayay = y.map(function (element){
                return element * 2
            })
   
            expect(newYayay[0]).toBe(4)
            expect(newYayay[1]).toBe(8)
            expect(newYayay[2]).toBe(16)

        })

    })
})

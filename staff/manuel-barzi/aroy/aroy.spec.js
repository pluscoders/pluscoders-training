describe('Aroy', function () {
    describe('forEach', function () {
        it('should succeed on valid instance with data', function () {
            var length = Math.floor(Math.random() * 1000) + 100

            var aroy = new Aroy()
            var values = []

            for (var i = 0; i < length; i++) {
                aroy[i] = Math.random()
                aroy.length++
                values[i] = aroy[i]
            }

            var copy = []
            var aroys = []

            aroy.forEach(function (value, index, array) {
                copy[index] = value
                aroys[index] = array
            })

            expect(aroy.length).toEqual(values.length)

            for (var i = 0; i < values.length; i++)
                expect(aroy[i]).toEqual(values[i])

            expect(copy.length).toEqual(aroy.length)

            for (var i = 0; i < copy.length; i++)
                expect(copy[i]).toEqual(aroy[i])

            for (var i = 0; i < aroy.length; i++)
                expect(aroys[i]).toEqual(aroy)
        })

        it('should fail on valid instance and non-function callback', function() {
            var aroy = new Aroy

            expect(function() {
                aroy.forEach()
            }).toThrowError(TypeError, 'undefined is not a function')

            expect(function() {
                aroy.forEach(1)
            }).toThrowError(TypeError, '1 is not a function')

            expect(function() {
                aroy.forEach(true)
            }).toThrowError(TypeError, 'true is not a function')

            // TODO more expecs here
        })

        // TODO more test cases (its)
    })

    describe('push', function() {
        it('should succeed ...', function() {

        })

        it('should succeed ...', function() {
            
        })

        // TODO ...
    })

    describe('pop', function() {
        it('should succeed ...', function() {

        })

        it('should succeed ...', function() {
            
        })

        // TODO ...
    })
})
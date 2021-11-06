describe('Aroy', function () {
    describe('forEach', function () {
        describe('iterating with data', function () {
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

                expect(aroy.length === values.length).toBeTrue()

                for (var i = 0; i < values.length; i++)
                    expect(aroy[i] === values[i]).toBeTrue()

                expect(copy.length === aroy.length).toBeTrue()

                for (var i = 0; i < copy.length; i++)
                    expect(copy[i] === aroy[i]).toBeTrue()

                for (var i = 0; i < aroy.length; i++)
                    expect(aroys[i] === aroy).toBeTrue()
            })
        })
    })
})
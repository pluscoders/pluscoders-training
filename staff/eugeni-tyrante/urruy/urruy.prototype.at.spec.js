describe('at', function() {
    it ('should return the position of the provided urruy accoring to the index', function () {
        var urr = new Urruy (10, 100, 1000, 10000)

        var r = urr.at(2)

        expect(r).toBe (1000)
    })

    it ('should return the position starting from the last element', function () {
        var urr = new Urruy (10, 100, 1000, 10000)

        var r = urr.at(-3)

        expect(r).toBe (100)
    })

    it ('should return undefined', function () {
        var urr = new Urruy (10, 100, 1000, 10000)

        var r = urr.at(10)

        expect(r).toBe (undefined)
    })

})
describe('every', function () {
    it('should return a boolean value if all the elements in the array pass the test implemented by the provided function', function (){
        var y = new Yayay

        y[0] = 1
        y[1] = 30
        y[2] = 39
        y[3] = 29
        y[4] = 10
        y[5] = 13
        y.length = 6

        var found = y.every(function (element) {
            return element < 40
        })
        expect(found).toBe(true)
    })
    it('should return a boolean value if all the elements in the array pass the test implemented by the provided function', function (){
        var y = new Yayay

        y[0] = 1
        y[1] = 30
        y[2] = 39
        y[3] = 29
        y[4] = 10
        y[5] = 13
        y.length = 6

        var found = y.every(function (element) {
            return element < 30
        })
        expect(found).toBe(false)
        
    })
})
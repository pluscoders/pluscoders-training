describe('map()', function () {
    it('should multiply [2, 4, 8] for 2 into a new array and return [4, 8, 16]', function () {
        var array1 = [2, 4, 8]
        var newArray = []

        var newArray = map(array1, function (element) {
            return element * 2
        })

        expect(newArray[0]).toBe(4)
        expect(newArray[1]).toBe(8)
        expect(newArray[2]).toBe(16)
    })

    it('should square roots of the numbers [9, 21, 49] into a new array and return [9, 13, 3]', function () {
        var array1 = [81, 169, 9];
        var newArray = []
    
        var newArray = map(array1, function (element) {
            return Math.sqrt(element)
        })
    
        expect(newArray[0]).toBe(9)
        expect(newArray[1]).toBe(13)
        expect(newArray[2]).toBe(3)
    })
})

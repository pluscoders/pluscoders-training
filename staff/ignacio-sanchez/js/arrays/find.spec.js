describe('find()', function () {
    it('should found the element [12] as the first element higher than [10] in the array [5,12,8,130,44] and return true', function () {
        var array = [5, 12, 8, 130, 44];
        var foundArray = []

        find(array, function (element) {
            return element > 10
        })

        expect(foundArray).toBe(true)
    })

    it('should found the element [130] as the first element higher than [120] in the array [5,12,8,130,44] and return true', function () {
        var array = [10, 40, 55, 130, 400];
        var foundArray = []

        find(array, function (element) {
            return element > 120
        })

        expect(foundArray).toBe(true)

    })
})



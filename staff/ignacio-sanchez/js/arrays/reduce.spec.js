describe('reduce()', function () {

    it('should add ("trivial" , "basic") into the array ["beans","bonus","apple"] resulting in length 5', function () {

        var arr = [1, 2, 3]


        var length = reduce(previousValue, currentValue, currentIndex, arr)

        expect(length).toBe(1)
        expect(arr[0]).toBe(6)

    })
})

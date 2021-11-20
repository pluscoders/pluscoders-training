describe('pop()', function () {

    it('should iterate on ["onion", "carrot", "vegetable"] and remove and return  ["vegetable"]', function () {
        var arr = ['onion', 'carrot', 'vegetable']
        var last = pop(arr)

        expect(last).toBe('vegetable')
        expect(arr.length).toBe(2)
        expect(arr[0]).toBe('onion')
        expect(arr[1]).toBe('carrot')
    })

    it('should iterate on ["trail", 1, "bit "] and remove and return  ["bit "]', function () {
        var arr = ['trail', 1, 'bit']
        var last = pop(arr)

        expect(last).toBe('bit')
        expect(arr.length).toBe(2)
        expect(arr[0]).toBe('trail')
        expect(arr[1]).toBe(1)
    })

    it('should iterate on [22 , "binance"] and remove and return ["binance"]', function () {
        var arr = [22, 'binance']
        var last = pop(arr)

        expect(last).toBe('binance')
        expect(arr.length).toBe(1)
        expect(arr[0]).toBe(22)
    })

    it('should iterate on ["space", "script", "performance"] and remove and return  ["bit "]', function () {
        var arr = ['space', 'script', 'performance']
        var last = pop(arr)

        expect(last).toBe('performance')
        expect(arr.length).toBe(2)
        expect(arr[0]).toBe('space')
        expect(arr[1]).toBe('script')
    })

})

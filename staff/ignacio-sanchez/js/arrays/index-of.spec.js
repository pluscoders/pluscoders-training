describe('indexOf()', function () {
    it('should find "bison" into the array ["ant", "bison", "camel", "duck", "bison"] returning index 5', function () {
        var arr = ['ant', 'bison', 'camel', 'duck', 'bison']

        var index = indexOf(arr, 'bison')

        expect(index).toBe(1)
        expect(arr[0]).toBe('ant')
        expect(arr[1]).toBe('bison')
        expect(arr[2]).toBe('camel')
        expect(arr[3]).toBe('duck')
        expect(arr[4]).toBe('bison')
    })

    it('should find "camel" into the array ["ant", "bison", "camel", "duck", "bison"] returning index 2', function () {
        var arr = ['ant', 'bison', 'camel', 'duck', 'bison']

        var index = indexOf(arr, 'camel', 0)

        expect(index).toBe(2)
        expect(arr[0]).toBe('ant')
        expect(arr[1]).toBe('bison')
        expect(arr[2]).toBe('camel')
        expect(arr[3]).toBe('duck')
        expect(arr[4]).toBe('bison')
    })

    it('should find "camel" into the array ["ant", "bison", "camel", "duck", "bison"] returning index 2', function () {
        var arr = ['ant', 'bison', 'camel', 'duck', 'bison']

        var index = indexOf(arr, 'camel', 2)

        expect(index).toBe(2)
        expect(arr[0]).toBe('ant')
        expect(arr[1]).toBe('bison')
        expect(arr[2]).toBe('camel')
        expect(arr[3]).toBe('duck')
        expect(arr[4]).toBe('bison')
    })

    it('should find "camel" into the array ["ant", "bison", "camel", "duck", "bison"] returning index 2', function () {
        var arr = ['ant', 'bison', 'camel', 'duck', 'bison']

        var index = indexOf(arr, 'radio', 0)

        expect(index).toBe(-1)
        expect(arr[0]).toBe('ant')
        expect(arr[1]).toBe('bison')
        expect(arr[2]).toBe('camel')
        expect(arr[3]).toBe('duck')
        expect(arr[4]).toBe('bison')
    })
})




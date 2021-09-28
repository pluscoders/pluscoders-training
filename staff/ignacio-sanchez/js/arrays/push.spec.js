describe('push()', function () {

    it('should add ("trivial" , "basic") into the array ["beans","bonus","apple"] resulting in length 5', function () {

        var arr = ['beans', 'bonus', 'apple']

        var length = push(arr, 'trivial', 'basic')

        expect(length).toBe(5)
        expect(arr[0]).toBe('beans')
        expect(arr[1]).toBe('bonus')
        expect(arr[2]).toBe('apple')
        expect(arr[3]).toBe('trivial')
        expect(arr[4]).toBe('basic')
    })

    it('should add ("siberet", 1) into the array ["beans","bonus","apple"] resulting in length 5', function () {

        var arr = ['beans', 'bonus', 'apple']

        var length = push(arr, 'siberet', 1)

        expect(length).toBe(5)
        expect(arr[0]).toBe('beans')
        expect(arr[1]).toBe('bonus')
        expect(arr[2]).toBe('apple')
        expect(arr[3]).toBe('siberet')
        expect(arr[4]).toBe(1)

    })

    it('should add [33, 44, "real food"] into the array ["beans","bonus","apple"] resulting in length 6', function () {

        var arr = ['beans', 'bonus', 'apple']

        var length = push(arr, 33, 44, 'real food')

        expect(length).toBe(6)
        expect(arr[0]).toBe('beans')
        expect(arr[1]).toBe('bonus')
        expect(arr[2]).toBe('apple')
        expect(arr[3]).toBe(33)
        expect(arr[4]).toBe(44)
        expect(arr[5]).toBe('real food')

    })

    it('should add [" real food "] into the array ["apple"] resulting in length 2', function () {

        var arr = ['apple']
        var addElement = [" real food "]

        var length = push(arr, " real food ")

        expect(length).toBe(2)
        expect(arr[0]).toBe('apple')
        expect(arr[1]).toBe(' real food ')

    })


})

describe('includes', function () {
    it('should return true or false whether an array includes a certain value among it entries', function () {
        var y = new Yayay

        y[0] = 1
        y[1] = 2
        y[2] = 3
        y.length = 3

       found = y.includes(2)

        expect(found).toBe(true)

    })
    it('should return true or false whether an array includes a certain value among it entries', function () {
        var y = new Yayay

        y[0] = 'cat'
        y[1] = 'dog'
        y[2] = 'bat'
        y.length = 3

        found= y.includes('cat')

        expect(found).toBe(true)

    })
    it('should return true or false whether an array includes a certain value among it entries', function () {
        var y = new Yayay

        y[0] = 'cat'
        y[1] = 'dog'
        y[2] = 'bat'
        y.length = 3

        found= y.includes('at')

        expect(found).toBe(false)

    })
    it('should return true or false whether an array includes a certain value among it entries', function () {
        var y = new Yayay

        y[0] = 'cat'
        y[1] = 'dog'
        y[2] = 'bat'
        y.length = 3

        found= y.includes('cat',100)

        expect(found).toBe(false)

    })

})
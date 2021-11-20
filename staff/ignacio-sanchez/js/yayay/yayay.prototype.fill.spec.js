describe('fill', function () {
    it('should changes all elements in an array to a static value from start index to an end index', function () {
        var y = new Yayay

        y[0] = 1
        y[1] = 2
        y[2] = 3
        y[3] = 4
        y.length = 4

        var res = y.fill(0, 2, 4)

        expect(y[0]).toEqual(1)
        expect(y[1]).toEqual(2)
        expect(y[2]).toEqual(0)
        expect(y[3]).toEqual(0)
        //expect(res).toEqual(y)
    })
    it('should changes all elements in an array to a static value from start index to an end index', function () {
        var y = new Yayay

        y[0] = 1
        y[1] = 2
        y[2] = 3
        y[3] = 4
        y.length = 4

        var res = y.fill(5, 1)

        expect(y[0]).toBe(1)
        expect(y[1]).toBe(5)
        expect(y[2]).toBe(5)
        expect(y[3]).toBe(5)
        //expect(res).toEqual(y)
    })
    it('should changes all elements in an array to a static value from start index to an end index', function () {
        var y = new Yayay

        y[0] = 1
        y[1] = 2
        y[2] = 3
        y[3] = 4
        y.length = 4

        var res = y.fill(6)

        expect(y[0]).toBe(6)
        expect(y[1]).toBe(6)
        expect(y[2]).toBe(6)
        expect(y[3]).toBe(6)
        //expect(res).toEqual(y)
    })

    it('should changes all elements in an array to a static value from start index to an end index', function () {
        var y = new Yayay

        y[0] = 1
        y[1] = 2
        y[2] = 3
        y[3] = 4
        y.length = 4

        var res = y.fill(0, -10)

        expect(y[0]).toBe(0)
        expect(y[1]).toBe(0)
        expect(y[2]).toBe(0)
        expect(y[3]).toBe(0)
        expect(y.length).toBe(4)
        expect(y[-1]).toBeUndefined()
        //expect(res).toEqual(y)
    })
})
describe('sort', function () {
    it('should sort an array in place', function () {
        var y = new Yayay

        y[0] = 1
        y[1] = 30
        y[2] = 4
        y[3] = 21
        y[4] = 100000
        y.length = 5
     
        var sorted = y.sort(function (a, b) {
            // if (secondEl < firstEl) {
            //     return true
            //  }
            // if (a < b)
            //     return -1
            // else if (a > b)
            //     return 1
            // return 0
            return a - b
        })

        expect(sorted).toBe(y)
        expect(y.length).toEqual(5)
        expect(y[0]).toEqual(1)
        expect(y[1]).toEqual(4)
        expect(y[2]).toEqual(21)
        expect(y[3]).toEqual(30)
        expect(y[4]).toEqual(100000)
    })
    it('should sort an array in place', function () {
        var y = new Yayay

        y[0] = 'March'
        y[1] = 'Jan'
        y[2] = 'Feb'
        y[3] = 'Dec'
        y.length = 4
        
        var sorted = y.sort(function(a, b) {
            if (a < b)
                return -1
            else if (a > b)
                return 1
            return 0
        })

        expect(sorted).toBe(y)
        expect(y.length).toEqual(4)
        expect(y[0]).toEqual('Dec')
        expect(y[1]).toEqual('Feb')
        expect(y[2]).toEqual('Jan')
        expect(y[3]).toEqual('March')
    })

    it('should sort an array in place ascending when no callback expression is used', function () {
        var y = new Yayay

        y[0] = 'March'
        y[1] = 'Jan'
        y[2] = 'Feb'
        y[3] = 'Dec'
        y.length = 4
        
        var sorted = y.sort()

        expect(sorted).toBe(y)
        expect(y.length).toEqual(4)
        expect(y[0]).toEqual('Dec')
        expect(y[1]).toEqual('Feb')
        expect(y[2]).toEqual('Jan')
        expect(y[3]).toEqual('March')
    })

    it('should sort an array in place', function () {
        var y = new Yayay

        y[0] = 1
        y[1] = 30
        y[2] = -4
        y[3] = 21
        y[4] = 100000
        y.length = 5
     
        var sorted = y.sort(function (a, b) {
            return a - b
        })

        expect(sorted).toBe(y)
        expect(y.length).toEqual(5)
        expect(y[0]).toEqual(-4)
        expect(y[1]).toEqual(1)
        expect(y[2]).toEqual(21)
        expect(y[3]).toEqual(30)
        expect(y[4]).toEqual(100000)
    })

    it('should sort an array in place ascending when no callback expression is used', function () {
        var y = new Yayay

        y[0] = 3
        y[1] = 2
        y[2] = 1
        y[3] = 1000
        y.length = 4
        
        var sorted = y.sort()

        expect(sorted).toBe(y)
        expect(y.length).toEqual(4)
        expect(y[0]).toEqual(1)
        expect(y[1]).toEqual(1000)
        expect(y[2]).toEqual(2)
        expect(y[3]).toEqual(3)
    })
})
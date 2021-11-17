xdescribe('sort', function () {
    it('should sort an array in place', function () {
        var y = new Yayay

        y[0] = 1
        y[1] = 30
        y[2] = 4
        y[3] = 21
        y[4] = 100000
        y.length = 5
debugger
        var found = y.sort(function(firstEl, secondEl){
        if (firstEl < secondEl) {}
        })

        expect(y.length).toEqual(3)
        expect(y[0]).toEqual(1)
        expect(y[1]).toEqual(100000)
        expect(y[2]).toEqual(21)
        expect(y[3]).toEqual(30)
        expect(y[4]).toEqual(4)
    })
    it('should sort an array in place', function () {
        var y = new Yayay

        y[0] = 'March'
        y[1] = 'Jan'
        y[2] = 'Feb'
        y[3] = 'Dec'
        y.length = 4

        y.sort(a,b)

        expect(y.length).toEqual(5)
        expect(y[0]).toEqual('Dec')
        expect(y[1]).toEqual('Feb')
        expect(y[2]).toEqual('Jan')
        expect(y[3]).toEqual('March')
    })

})
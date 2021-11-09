describe('every', function() {
    it('should return true', function() {
        
        var urr = new Urruy (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
        
        var r = urr.every (function callback (currentValue, i, urruy) {
            if (currentValue > 3) {
                return true
            }
        })

        expect(r).toBe (true)
    })

    it('should return false', function() {
        
        var urr = new Urruy (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
        
        var r = urr.every (function callback (currentValue, i, urruy) {
            if (currentValue > 30) {
                return true
            }
        })

        expect(r).toBe (false)
    })

    it('should return true', function() {
        
        var urr = new Urruy (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
        
        var r = urr.every (function callback (currentValue, i, urruy) {
            if (currentValue > -1) {
                return true
            }
        })

        expect(r).toBe (true)
    })

})
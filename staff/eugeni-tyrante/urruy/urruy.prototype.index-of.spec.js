describe('indexOf', function() {
    it('should return the index position of the defined argument', function() {
        var urr = new Urruy('monkey', 'dog', 'doge', 'cat')

        var r = urr.indexOf('doge')

        expect(r).toBe (2)
    })
})
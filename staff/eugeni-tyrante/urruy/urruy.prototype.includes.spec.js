describe('includes', function () {
    it('should return true if the provided argument matches with any element of the Urruy', function () {
        var urr = new Urruy('monkey', 'frog', 'dog', 'cat', 'dolphin', 'bird', 'mouse', 'rat')
        
        var r = urr.includes('dog')

        expect(r).toBe (true)
    })

    it('should return false if the provided arguments doesnt match with any element of the Urruy', function () {
        var urr = new Urruy('monkey', 'frog', 'dog', 'cat', 'dolphin', 'bird', 'mouse', 'rat')

        var r = urr.includes('dog', 5)

        expect(r).toBe (false)
    })
})
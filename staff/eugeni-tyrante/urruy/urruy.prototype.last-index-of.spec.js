describe('lastIndexOf', function () {
    it('should return last index of the provided argument that matches with any element of the Urruy', function () {
        var urr = new Urruy('monkey', 'frog', 'dog', 'cat', 'dolphin', 'bird', 'mouse', 'dog', 'rat')

        var r = urr.lastIndexOf('dog')

        expect(r).toBe(7)
    })

    it('should return last index of the provided argument that matches with any element of the Urruy', function () {
        var urr = new Urruy('monkey', 'frog', 'dog', 'cat', 'dolphin', 'bird', 'mouse', 'doggie', 'rat')

        var r = urr.lastIndexOf('dog')

        expect(r).toBe(2)
    })

    it('should return -1 if cant find an argument that matches with any element of the Urruy', function () {
        var urr = new Urruy('monkey', 'frog', 'dog', 'cat', 'dolphin', 'bird', 'mouse', 'doggie', 'rat')

        var r = urr.lastIndexOf('doge')

        expect(r).toBe(-1)
    })

    it('should return -1 if cant find an argument that matches with any element of the Urruy', function () {
        var urr = new Urruy('monkey', 'frog', 'dog', 'cat', 'dolphin', 'bird', 'mouse', 'doggie', 'rat')

        var r = urr.lastIndexOf('dog', 3)

        expect(r).toBe(-1)
    })
})
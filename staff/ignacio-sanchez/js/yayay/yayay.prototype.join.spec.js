describe('join', function () {
    it('it should creates and return a new string by concatenating all of the elements in an array, separated by a specefied separator string.', function () {
        var y = new Yayay

        var string = ''

        y[0] = 'Fire'
        y[1] = 'Air'
        y[2] = 'Water'
        y.length = 3

        var string = y.join('+')

        expect(string).toBe('Fire+Air+Water')
        expect(y.length).toEqual(3)
    })

})
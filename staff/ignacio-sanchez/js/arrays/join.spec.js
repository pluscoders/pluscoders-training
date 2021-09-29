describe('join()', function () {
    it('should concatenating ["Fire", "Air", "Water"] and return a new string [FireAirWater]', function () {
        var array = ['Fire', 'Air', 'Water'];
        var string = ''

        var string = join(array, '')

        expect(string).toBe('FireAirWater')
    })

    it('should concatenating ["Fire", "Air", "Water"] and return a new string [Fire+Air+Water]', function () {
        var array = ['Fire', 'Air', 'Water'];
        var string = ''

        var string = join(array, '+')

        expect(string).toBe('Fire+Air+Water')
    })

})


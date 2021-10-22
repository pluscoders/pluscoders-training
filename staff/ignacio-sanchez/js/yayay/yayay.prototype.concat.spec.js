describe('concat', function () {
    it('should concatenate  the yayays { "a", "b", "c" } and { "d", "e", "f" } into a new yayay { "a", "b", "c","d", "e", "f" }', function () {
        var yayay1 = new Yayay
        var yayay2 = new Yayay
        var yayay3 = new Yayay

        yayay1[0] = 'a'
        yayay1[1] = 'b'
        yayay1[2] = 'c'
        yayay1.length = 3

        yayay2[0] = 'd'
        yayay2[1] = 'e'
        yayay2[2] = 'f'
        yayay2.length = 3

        yayay3[0] = 'g'
        yayay3[1] = 'h'
        yayay3[2] = 'i'
        yayay3.length = 3

        

        var newYayay = yayay1.concat(yayay2, yayay3)

        expect(newYayay instanceof Yayay).toBeTrue()
        expect(newYayay.length).toBe(yayay1.length + yayay2.length + yayay3.length)
        expect(newYayay[0]).toBe(yayay1[0])
        expect(newYayay[1]).toBe(yayay1[1])
        expect(newYayay[2]).toBe(yayay1[2])
        expect(newYayay[3]).toBe(yayay2[0])
        expect(newYayay[4]).toBe(yayay2[1])
        expect(newYayay[5]).toBe(yayay2[2])
        expect(newYayay[6]).toBe(yayay3[0])
        expect(newYayay[7]).toBe(yayay3[1])
        expect(newYayay[8]).toBe(yayay3[2])
    })
})

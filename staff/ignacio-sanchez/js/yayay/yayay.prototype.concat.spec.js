describe('concat', function () {
    it('should concatenate the yayays into a new yayay', function () {
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

    it('should concatenate the non-yayay arguments into a new yayay', function () {
        var yayay1 = new Yayay

        yayay1[0] = 'a'
        yayay1[1] = 'b'
        yayay1[2] = 'c'
        yayay1.length = 3


        var newYayay = yayay1.concat('d', 'e', 'f', 'g', 'h', 'i')

        expect(newYayay instanceof Yayay).toBeTrue()
        expect(newYayay.length).toBe(yayay1.length + 6)
        expect(newYayay[0]).toBe(yayay1[0])
        expect(newYayay[1]).toBe(yayay1[1])
        expect(newYayay[2]).toBe(yayay1[2])
        expect(newYayay[3]).toBe('d')
        expect(newYayay[4]).toBe('e')
        expect(newYayay[5]).toBe('f')
        expect(newYayay[6]).toBe('g')
        expect(newYayay[7]).toBe('h')
        expect(newYayay[8]).toBe('i')
    })

    it('should concatenate the non-yayay and yayay arguments into a new yayay', function () {
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

        var newYayay = yayay1.concat('x', yayay2, 'y', yayay3, 'z')

        expect(newYayay instanceof Yayay).toBeTrue()
        expect(newYayay.length).toBe(yayay1.length + yayay2.length + yayay3.length + 3)
        expect(newYayay[0]).toBe(yayay1[0])
        expect(newYayay[1]).toBe(yayay1[1])
        expect(newYayay[2]).toBe(yayay1[2])
        expect(newYayay[3]).toBe('x')
        expect(newYayay[4]).toBe(yayay2[0])
        expect(newYayay[5]).toBe(yayay2[1])
        expect(newYayay[6]).toBe(yayay2[2])
        expect(newYayay[7]).toBe('y')
        expect(newYayay[8]).toBe(yayay3[0])
        expect(newYayay[9]).toBe(yayay3[1])
        expect(newYayay[10]).toBe(yayay3[2])
        expect(newYayay[11]).toBe('z')
    })
})

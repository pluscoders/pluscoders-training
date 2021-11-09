describe('concat', function () {
    it('should concatenate all the arguments after the provided Urruy', function () {
        var urr = new Urruy(1, 2, 3, 4)

        var urra = new Urruy(5, 6, 7, 8)

        var furra = new Urruy(9, 10, 11, 12)

        urr.concat(urra, furra)

        expect(urr.length).toBe(12)
        expect(urr[0]).toBe(1)
        expect(urr[1]).toBe(2)
        expect(urr[2]).toBe(3)
        expect(urr[3]).toBe(4)
        expect(urr[4]).toBe(5)
        expect(urr[5]).toBe(6)
        expect(urr[6]).toBe(7)
        expect(urr[7]).toBe(8)
        expect(urr[8]).toBe(9)
        expect(urr[9]).toBe(10)
        expect(urr[10]).toBe(11)
        expect(urr[11]).toBe(12)
    })

    it('should concatenate all the arguments after the provided Urruy', function () {
        var urr = new Urruy(1, 2, 3, 4)

        var urra = new Urruy(5, 6, 7, 8)

        urr.concat('que por saco', 'que da el gato', urra)

        expect(urr.length).toBe(10)
        expect(urr[0]).toBe(1)
        expect(urr[1]).toBe(2)
        expect(urr[2]).toBe(3)
        expect(urr[3]).toBe(4)
        expect(urr[4]).toBe('que por saco')
        expect(urr[5]).toBe('que da el gato')
        expect(urr[6]).toBe(5)
        expect(urr[7]).toBe(6)
        expect(urr[8]).toBe(7)
        expect(urr[9]).toBe(8)
    })

    it('should concatenate all the arguments including the undefined on it', function () {
        var urr = new Urruy(1, 2, 3)

        urr.concat(new Urruy(4, undefined, 5))

        expect(urr.length).toBe(6)
        expect(urr[0]).toBe(1)
        expect(urr[1]).toBe(2)
        expect(urr[2]).toBe(3)
        expect(urr[3]).toBe(4)
        expect(urr[4]).toBe(undefined)
        expect(urr[5]).toBe(5)
    })
})
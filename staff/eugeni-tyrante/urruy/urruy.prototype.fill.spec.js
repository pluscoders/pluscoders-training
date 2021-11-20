describe('fill', function() {
    it ('should change the elements from de position 2 until 4 with the value 0', function () {
        var urr = new Urruy (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

        urr.fill(0, 2, 4)

        expect(urr.length).toBe(10)
        expect(urr[0]).toBe(1)
        expect(urr[1]).toBe(2)
        expect(urr[2]).toBe(0)
        expect(urr[3]).toBe(0)
        expect(urr[4]).toBe(5)
        expect(urr[5]).toBe(6)
        expect(urr[6]).toBe(7)
        expect(urr[7]).toBe(8)
        expect(urr[8]).toBe(9)
        expect(urr[9]).toBe(10)
    })

    it ('should change all the elements from de position 0 until 9 with the value 2', function () {
        var urr = new Urruy (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

        urr.fill(2)

        expect(urr.length).toBe(10)
        expect(urr[0]).toBe(2)
        expect(urr[1]).toBe(2)
        expect(urr[2]).toBe(2)
        expect(urr[3]).toBe(2)
        expect(urr[4]).toBe(2)
        expect(urr[5]).toBe(2)
        expect(urr[6]).toBe(2)
        expect(urr[7]).toBe(2)
        expect(urr[8]).toBe(2)
        expect(urr[9]).toBe(2)
    })

    it ('should change the element in the position 9 with the value', function () {
        var urr = new Urruy (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

        urr.fill('monja', -1, 1000)

        expect(urr.length).toBe(10)
        expect(urr[0]).toBe(1)
        expect(urr[1]).toBe(2)
        expect(urr[2]).toBe(3)
        expect(urr[3]).toBe(4)
        expect(urr[4]).toBe(5)
        expect(urr[5]).toBe(6)
        expect(urr[6]).toBe(7)
        expect(urr[7]).toBe(8)
        expect(urr[8]).toBe(9)
        expect(urr[9]).toBe('monja')
    })

})
describe('flat', function () {
    it ('should remove the nesting in the first array and make the second one higer', function () {
        var urr = new Urruy(1, [2, 3], [4, 5], [[6]])
        
        var r = urr.flat(1)

        expect(r.length).toBe(6)
        expect(r[0]).toBe(1)
        expect(r[1]).toBe(2)
        expect(r[2]).toBe(3)
        expect(r[3]).toBe(4)
        expect(r[4]).toBe(5)
        expect(r[5]).toEqual([6])
    })

    it ('should remove the nesting in the first array and the second one', function () {
        var urr = new Urruy(1, [2, 3], [4, 5], [[6]])
        
        var r = urr.flat(2)

        expect(r.length).toBe(6)
        expect(r[0]).toBe(1)
        expect(r[1]).toBe(2)
        expect(r[2]).toBe(3)
        expect(r[3]).toBe(4)
        expect(r[4]).toBe(5)
        expect(r[5]).toEqual(6)
    })

    it ('should remove the nesting in the first array and the second one', function () {
        var urr = new Urruy(1, [2, 3], undefined, [4, 5], [[[6]]])
        
        var r = urr.flat(3)

        expect(r.length).toBe(7)
        expect(r[0]).toBe(1)
        expect(r[1]).toBe(2)
        expect(r[2]).toBe(3)
        expect(r[3]).toEqual(undefined)
        expect(r[4]).toBe(4)
        expect(r[5]).toBe(5)
        expect(r[6]).toEqual(6)
    })

    it ('should remove the nesting in the first array and the second one', function () {
        var urr = new Urruy(1, [2, 3], undefined, [4, 5], [[[[6]]]])
        
        var r = urr.flat(4)

        expect(r.length).toBe(7)
        expect(r[0]).toBe(1)
        expect(r[1]).toBe(2)
        expect(r[2]).toBe(3)
        expect(r[3]).toEqual(undefined)
        expect(r[4]).toBe(4)
        expect(r[5]).toBe(5)
        expect(r[6]).toEqual(6)
    })

    it ('should remove the nesting in the first array and the second one', function () {
        var urr = new Urruy(1, new Urruy(2, 3), undefined, new Urruy(4, 5), new Urruy(new Urruy(new Urruy(new Urruy(6, 7)))))
        
        var r = urr.flat(4)

        expect(r.length).toBe(8)
        expect(r[0]).toBe(1)
        expect(r[1]).toBe(2)
        expect(r[2]).toBe(3)
        expect(r[3]).toEqual(undefined)
        expect(r[4]).toBe(4)
        expect(r[5]).toBe(5)
        expect(r[6]).toEqual(6)
        expect(r[7]).toEqual(7)
    })
})
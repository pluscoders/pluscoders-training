describe('forEach()', function () {
    it('should iterate on [1, 2, 3] resulting in [1, 2, 3]', function () {
        var arr = [1, 2, 3]
        var elements = []
        var indexes = []
        var arrays = []

        forEach(arr, function (element, index, array) {
            elements[elements.length] = element
            indexes[indexes.length] = index
            arrays[arrays.length] = array
        })

        expect(elements[0]).toBe(1) && (elements[1]).toBe (2) && (elements[2]).toBe (3)
        expect(indexes[0]).toBe(0) && (indexes[1]).toBe (1) && (indexes[2]).toBe(2)
        expect(arrays[0]).toBe(arr) && (arrays[1]).toBe (arr) && (arrays[2]).toBe(arr)

    })


    it('should iterate on ["paper", "shirt", "ovni"] resulting in [paper, shirt, ovni]', function () {
        var arr = ["paper", "shirt", "ovni"]
        var res = []

        forEach(arr, function (value) {
            res[res.length] = value
        })

        expect(res[0]).toBe("paper") && (res[1]).toBe("shirt") && (res[2]).toBe("ovni")

    })

    it('should iterate on ["kayak", 2 , "violinist" , 4 , "trebol" , 5] resulting in [kayak,2,violinist,trebol,5]', function () {
        var arr = ["kayak", 2, "violinist", 4, "trebol", 5]
        var res = []

        forEach(arr, function (value) {
            res[res.length] = value
        })

        expect(res[0]).toBe("kayak") && (res[1]).toBe(2) && (res[2]).toBe("violinist") && (res[3]).toBe(4) && (res[4]).toBe("trebol") && (res[5]).toBe(5)

    })

    it('should iterate on ["the world", 22 , "anyway"] resulting in [the world, 22, anyway]', function () {
        var arr = ["the world", 22, "anyway"]
        var res = []

        forEach(arr, function (value) {
            res[res.length] = value
        })

        expect(res[0]).toBe("the world") && (res[1]).toBe(22) && (res[2]).toBe("anyway")

    })

})

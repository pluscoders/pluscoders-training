describe('reduce()', function () {

    it('should add [1,2,3] and return the result 6', function () {

        var arr = [1, 2, 3]

        var resul = reduce(arr, function(accumulator, currentValue, currentIndex, array) {
            return accumulator + currentValue
        })

        expect(resul).toBe(6)

    })

    it('should add [1,2,3] and return the result 6', function () {

        var arr = [1, 2, 3]

        var resul = reduce(arr, function(accumulator, currentValue, currentIndex, array) {
            return accumulator * currentValue
        })

        expect(resul).toBe(6)

    })

    it('should add [1.25, 2.50, 3.75] and return the result 6', function () {

        var arr = [1.25, 2.50, 3.75]

        var resul = reduce(arr, function(accumulator, currentValue, currentIndex, array) {
            return accumulator * currentValue
        })

        expect(resul).toBe(11.71875)

    })

    it('should extract the total amount from the items in cart', function() {
        var cart = [
            { name: 'Socks', price: 9.9 },
            { name: 'Hat', price: 39.9 },
            { name: 'Pants', price: 15.9 },
            { name: 'T-Shirt', price: 12.9 },
            { name: 'Shoes', price: 66.9 }
        ]

        var total = reduce(cart, function(accum, element) {
            return accum + element.price
        }, 0)

        expect(total).toBe(9.9 + 39.9 + 15.9 + 12.9 + 66.9)
    })

    it('should extract the total amount of fruits per name in basket', function() {
        var basket = ['banana', 'naranja', 'banana', 'apple', 'anana', 'mango', 'banana', 'naranja', 'naranja', 'lemon', 'apple', 'naranja', 'banana', 'apple', 'anana', 'banana', 'naranja', 'banana', 'apple', 'anana', 'mango', 'banana', 'naranja', 'banana', 'apple', 'anana', 'mango', 'banana', 'naranja', 'naranja', 'lemon', 'apple', 'naranja', 'banana', 'apple', 'anana', 'banana', 'naranja', 'banana', 'apple', 'anana', 'mango', 'banana', 'lemon', 'apple', 'naranja', 'banana', 'apple', 'anana', 'banana', 'naranja', 'banana', 'apple', 'anana', 'mango', 'banana', 'naranja', 'banana', 'apple', 'anana', 'mango', 'banana', 'naranja', 'naranja', 'lemon', 'apple']

        var counter = reduce(basket, function(accum, element) {
            if (typeof accum[element] === 'undefined') accum[element] = 0

            accum[element]++

            return accum
        }, {}) // { banana: 2, naranja: 1, ... }

        expect(counter.banana).toBe(19)
        expect(counter.naranja).toBe(15)
        expect(counter.apple).toBe(13)
        expect(counter.anana).toBe(9)
        expect(counter.mango).toBe(6)
        expect(counter.lemon).toBe(4)
    })
})

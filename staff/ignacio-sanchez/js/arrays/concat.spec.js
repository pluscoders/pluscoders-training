describe('concat()', function () {
    it('should concatenate ["a", "b", "c"] and ["d", "e", "f"] into a new array and return ["a", "b", "c","d", "e", "f"]', function () {
        var array1 = ['a', 'b', 'c'];
        var array2 = ['d', 'e', 'f'];

        var newArray = concat(array1, array2)

        expect(newArray[0]).toBe(array1[0])
        expect(newArray[1]).toBe(array1[1])
        expect(newArray[2]).toBe(array1[2])
        expect(newArray[3]).toBe(array2[0])
        expect(newArray[4]).toBe(array2[1])
        expect(newArray[5]).toBe(array2[2])
    })

    it('should concatenate [1, 2, 3] and [4, 5, 6] into a new array and return [1,2,3,4,5,6]', function () {
        var array1 = [1, 2, 3]
        var array2 = [4, 5, 6]

        var newArray = concat(array1, array2)

        expect(newArray[0]).toBe(array1[0])
        expect(newArray[1]).toBe(array1[1])
        expect(newArray[2]).toBe(array1[2])
        expect(newArray[3]).toBe(array2[0])
        expect(newArray[4]).toBe(array2[1])
        expect(newArray[5]).toBe(array2[2])
    })

    it('should concatenate ["a", "b", "c"] , ["d", "e", "f"] and "music" into a new array and return ["a", "b", "c","d", "e", "f","music"]', function () {
        var array5 = ['a', 'b', 'c']
        var array6 = ['d', 'e', 'f']

        var newArray = concat(array5, array6, 'music')

        expect(newArray[0]).toBe(array5[0])
        expect(newArray[1]).toBe(array5[1])
        expect(newArray[2]).toBe(array5[2])
        expect(newArray[3]).toBe(array6[0])
        expect(newArray[4]).toBe(array6[1])
        expect(newArray[5]).toBe(array6[2])
        expect(newArray[6]).toBe('music')
    })

    it('should concatenate [1, 2, 3]  and true into a new array and return [1,2,3,true]', function () {
        var array1 = [1, 2, 3]

        var newArray = concat(array1, true)

        expect(newArray[0]).toBe(array1[0])
        expect(newArray[1]).toBe(array1[1])
        expect(newArray[2]).toBe(array1[2])
        expect(newArray[3]).toBe(true)
    })

    it('should concatenate [1, 2, 3]  and true into a new array and return [1,2,3,true,false]',function() {
        var array1 = [1, 2, 3]
    
        var newArray = concat(array1, true, false)
    
        expect(newArray[0]).toBe(array1[0])
        expect(newArray[1]).toBe(array1[1])
        expect(newArray[2]).toBe(array1[2])
        expect(newArray[3]).toBe(true)
        expect(newArray[4]).toBe(false)
    })

    it('should concatenate [1, 2, 3] and [4, 5, 6] and [7,8,9] and true, and false and "hola mundo" into a new array and return [1,2,3,true,false]',function(){   
        var array1 = [1, 2, 3]
        var array2 = [4, 5, 6]
    
        var newArray = concat(array1, array2, [7, 8, 9], true, false, "hola mundo")
    
        expect(newArray[0]).toBe(array1[0])
        expect(newArray[1]).toBe(array1[1])
        expect(newArray[2]).toBe(array1[2])
        expect(newArray[3]).toBe(array2[0])
        expect(newArray[4]).toBe(array2[1])
        expect(newArray[5]).toBe(array2[2])
        expect(newArray[6]).toBe(7)
        expect(newArray[7]).toBe(8)
        expect(newArray[8]).toBe(9)
        expect(newArray[9]).toBe(true)
        expect(newArray[10]).toBe(false)
        expect(newArray[11]).toBe('hola mundo')
    })

})



describe('reduce()', function () {

    it('should add ["1,2,3"] and return the result ("6")', function () {

        var arr = [1, 2, 3]

debugger
        var resul = reduce(arr, function callback (accumulator, currentValue, currentIndex, array){
            return accumulator + currentValue
        })
            
        expect(resul).toBe(6)

    })
})

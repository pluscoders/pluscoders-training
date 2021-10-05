describe('Yayay', function() {
    describe('constructor', function() {
        it('should instantiate a Yayay with length 0 by default', function() {
            var y = new Yayay

            expect(y instanceof Yayay).toBeTrue()
            expect(y.length).toEqual(0)
        })
    })

    describe('push', function() {
        it('should push one element', function() {
            var y = new Yayay

            y.push('hola mundo')

            expect(y.length).toEqual(1)
            expect(y[0]).toEqual('hola mundo')
        })
    })

    describe('pop', function() {
        it('should pop one element', function() {
            var y = new Yayay

            y[0] = 'hola'
            y[1] = 'mundo'
            y.length = 2

            var last = y.pop()

            expect(y.length).toEqual(1)
            expect(y[0]).toEqual('hola')
            expect(last).toEqual('mundo')
        })
    })

    describe('forEach', function() {        
        it('should iterate the same function for each element',function(){
            var y = new Yayay
            
            y[0] = 'paper'
            y[1] = 'shirt'
            y[2] = 'ovni'
            
            var callback = y.forEach

            expect(y[0]).toEqual('paper')
            expect(y[1]).toEqual('shirt')
            expect(y[2]).toEqual('ovni')
        })
    })    

    describe('concat', function() {        
        it('should merge two or more arrays into a new array',function(){
            var y = new Yayay

            var array1 = ['a', 'b', 'c'];
            var array2 = ['d', 'e', 'f'];
    
            newArray = y.concat([array1],[array2])
    
            expect(newArray[0]).toBe(array1[0])
            expect(newArray[1]).toBe(array1[1])
            expect(newArray[2]).toBe(array1[2])
            expect(newArray[3]).toBe(array2[0])
            expect(newArray[4]).toBe(array2[1])
            expect(newArray[5]).toBe(array2[2])
        })
    })    
})
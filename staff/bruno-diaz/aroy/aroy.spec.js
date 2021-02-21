describe('Aroy', function () {
    describe('forEach', function () {
        it('should succeed on valid instance with data', function () {
            var length = Math.floor(Math.random() * 1000) + 100

            var aroy = new Aroy
            var values = []

            for (var i = 0; i < length; i++) {
                aroy[i] = Math.random()
                aroy.length++
                values[i] = aroy[i]
            }

            var copy = []
            var aroys = []

            aroy.forEach(function (value, index, array) {
                copy[index] = value
                aroys[index] = array
            })

            expect(aroy.length).toEqual(values.length)

            for (var i = 0; i < values.length; i++)
                expect(aroy[i]).toEqual(values[i])

            expect(copy.length).toEqual(aroy.length)

            for (var i = 0; i < copy.length; i++)
                expect(copy[i]).toEqual(aroy[i])

            for (var i = 0; i < aroy.length; i++)
                expect(aroys[i]).toEqual(aroy)
        })

        it('should fail on valid instance and non-function callback', function() {
            var aroy = new Aroy

            expect(function() {
                aroy.forEach()
            }).toThrowError(TypeError, 'undefined is not a function')

            expect(function() {
                aroy.forEach(1)
            }).toThrowError(TypeError, '1 is not a function')

            expect(function() {
                aroy.forEach(true)
            }).toThrowError(TypeError, 'true is not a function')

            // TODO more expecs here
        })

        // TODO more test cases (its)
    })

    describe('push', function() {
        it('should succeed on pushing an element into an array', function() {
            var length = Math.floor(Math.random() * 100) + 100

            var aroy = new Aroy
            var copy = []

            for (var i = 0; i < length; i++) {
                aroy[i] = Math.floor(Math.random() * 100)
                aroy.length++
                copy[i] = aroy[i]
            }

            var elementToAdd = Math.floor(Math.random() * 100)

            var result = aroy.push(elementToAdd)

            expect(typeof result).toEqual('number')

            expect(result).toEqual(copy.length + 1)
            
            expect(aroy.length).toEqual(result)
            
            expect(aroy[aroy.length - 1]).toEqual(elementToAdd)

            for (var i = 0; i < copy.length; i++)
                expect(aroy[i]).toEqual(copy[i])
        })

        it('should succeed on pushing more than one element into an array', function() {
            var length = Math.floor(Math.random() * 100) + 100

            var aroy = new Aroy
            var copy = []

            for (var i = 0; i < length; i++) {
                aroy[i] = Math.floor(Math.random() * 100)
                aroy.length++
                copy[i] = aroy[i]
            }

            var elementsToAdd = []
            var elementsToAddLength = Math.floor(Math.random() * 10) + 10

            for (var i = 0; i < elementsToAddLength; i++)
                elementsToAdd[i] = Math.floor(Math.random() * 100)

            var result = aroy.push.apply(aroy, elementsToAdd)

            expect(typeof result).toEqual('number')

            expect(result).toEqual(copy.length + elementsToAddLength)
            
            expect(aroy.length).toEqual(result)

            for(var i = aroy.length - elementsToAddLength; i < aroy.length; i++)
                expect(aroy[i]).toEqual(elementsToAdd[i - aroy.length + elementsToAddLength])

            for (var i = 0; i < copy.length; i++)
                expect(aroy[i]).toEqual(copy[i])
        })
    })

    describe('pop', function() {
        it('should succeed delete last element in aroy', function() {
            var length = Math.floor(Math.random() * 100) + 100

            var aroy = new Aroy
            var copy = []
            
            for (var i = 0; i < length; i++) {
                aroy[i] = Math.floor(Math.random() * 100)
                aroy.length++
                copy[i] = aroy[i]
            }
            
            var result = aroy.pop()

            expect(result).toEqual(copy[copy.length - 1])

            expect(aroy.hasOwnProperty(copy.length - 1)).toBeFalse()

            expect(aroy.length).toEqual(copy.length - 1)
            
            for (var i = 0; i < aroy.length; i++)
                expect(aroy[i]).toEqual(copy[i])

        })
    })

    describe('reverse', function() {
        it('should succeed put the elements in aroy in the opposite position', function() {
            var length = Math.floor(Math.random() * 100) + 100

            var aroy = new Aroy
            var copy = []
            
            for (var i = 0; i < length; i++) {
                aroy[i] = Math.floor(Math.random() * 100)
                aroy.length++
                copy[i] = aroy[i]
            }

            var result = aroy.reverse()

            expect(result instanceof Aroy).toEqual(true)
            expect(aroy.length).toEqual(copy.length)
            
            for (var i = 0; i < aroy.length; i++)
                expect(aroy[i]).toEqual(copy[aroy.length - 1 - i])
        })
    })

    describe('concat', function() {
        it('should succeed concat two or more aroys', function() {
            var aroy = new Aroy
            aroy.length = Math.floor(Math.random() * 100) + 10
            var copy = []

            for (var i = 0; i < aroy.length; i++) {
                aroy[i] = Math.floor(Math.random() * 100)
                copy[i] = aroy[i]
            }

            var aroys = new Aroy
            aroys.length = Math.floor(Math.random() * 100) + 10
            
            for (var i = 0; i < aroys.length; i++) {
                var element = new Aroy
                element.length = Math.floor(Math.random() * 100) + 10
                for (var j = 0; j < element.length; j++)
                    element[j] = Math.floor(Math.random() * 100)

                aroys[i] = element
            }
            
            var result = aroy.concat.apply(aroy, aroys)

            expect(result instanceof Aroy).toEqual(true)
            
            var lengthResult = aroy.length
            for (var i = 0; i < aroys.length; i++) 
                lengthResult += aroys[i].length
            expect(result.length).toEqual(lengthResult)
            
            for (var i = 0; i < aroy.length; i++)
                expect(result[i]).toEqual(aroy[i])

            var k = aroy.length
            for (var i = 0; i < aroys.length; i++) {
                for (var j = 0; j < aroys[i].length; j++) {
                    expect(result[k]).toEqual(aroys[i][j])
                    k++
                }
            }
            
            expect(aroy.length).toEqual(copy.length)
            
            for (var i = 0; i < aroy.length; i++)
                expect(aroy[i]).toEqual(copy[i])
        })
    })

    describe('includes', function() {
        it('should succeed includes a pattern in aroy from index position', function() {
            var aroy = new Aroy
            aroy.length = Math.floor(Math.random() * 100) + 10
            var copy = []

            for (var i = 0; i < aroy.length; i++) {
                aroy[i] = Math.floor(Math.random() * 100)
                copy[i] = aroy[i]
            }

            var pattern = Math.floor(Math.random() * 100)
            var index = Math.floor(Math.random() * aroy.length)
            var sign = Math.floor(Math.random())
            if (sign) index = index * (-1)

            var result = aroy.includes(pattern, index)

            expect(typeof result).toEqual('boolean')

            if (index < 0) index += aroy.length

            for (var i = index; i < aroy.length; i++)
                if (pattern === aroy[i]) break
            if (result)
                expect(pattern).toEqual(aroy[i])
            
            expect(aroy.length).toEqual(copy.length)
        
            for (var i = 0; i < aroy.length; i++)
                expect(aroy[i]).toEqual(copy[i])
        })
        it('should succeed includes a pattern in aroy without index position', function() {
            var aroy = new Aroy
            aroy.length = Math.floor(Math.random() * 100) + 10
            var copy = []

            for (var i = 0; i < aroy.length; i++) {
                aroy[i] = Math.floor(Math.random() * 100)
                copy[i] = aroy[i]
            }

            var pattern = Math.floor(Math.random() * 100)

            var result = aroy.includes(pattern)

            expect(typeof result).toEqual('boolean')

            for (var i = 0; i < aroy.length; i++)
                if (pattern === aroy[i]) break
            if (result)
                expect(pattern).toEqual(aroy[i])
            
            expect(aroy.length).toEqual(copy.length)
        
            for (var i = 0; i < aroy.length; i++)
                expect(aroy[i]).toEqual(copy[i])
        })
    })

    describe('indexOF', function() {
        it('should succeed includes a pattern in aroy from index position', function() {
            var aroy = new Aroy
            aroy.length = Math.floor(Math.random() * 100) + 10
            var copy = []

            for (var i = 0; i < aroy.length; i++) {
                aroy[i] = Math.floor(Math.random() * 100)
                copy[i] = aroy[i]
            }

            var pattern = Math.floor(Math.random() * 100)
            var index = Math.floor(Math.random() * aroy.length)
            var sign = Math.floor(Math.random())
            if (sign) index = index * -1
            
            var result = aroy.indexOf(pattern, index)
            
            expect(typeof result).toEqual('number')
            
            if (sign < 0) index += aroy.length
            for (var i = index; i < aroy.length; i++)
                if (pattern === aroy[i]) break
            if (result !== -1)
                expect(pattern).toEqual(aroy[i])
            
            expect(aroy.length).toEqual(copy.length)
        
            for (var i = 0; i < aroy.length; i++)
                expect(aroy[i]).toEqual(copy[i])
        })
        it('should succeed includes a pattern in aroy without index position', function() {
            var aroy = new Aroy
            aroy.length = Math.floor(Math.random() * 100) + 10
            var copy = []

            for (var i = 0; i < aroy.length; i++) {
                aroy[i] = Math.floor(Math.random() * 100)
                copy[i] = aroy[i]
            }

            var pattern = Math.floor(Math.random() * 100)
            
            var result = aroy.indexOf(pattern)
            
            expect(typeof result).toEqual('number')
            
            for (var i = 0; i < aroy.length; i++)
                if (pattern === aroy[i]) break
            if (result !== -1)
                expect(pattern).toEqual(aroy[i])
            
            expect(aroy.length).toEqual(copy.length)
        
            for (var i = 0; i < aroy.length; i++)
                expect(aroy[i]).toEqual(copy[i])
        })
    })

    describe('find', function() {
        it('should succeed includes an element in aroy from index position which satisfies a callback', function() {
            var aroy = new Aroy
            aroy.length = Math.floor(Math.random() * 10) + 10
            var copy = []

            for (var i = 0; i < aroy.length; i++) {
                aroy[i] = Math.random()
                copy[i] = aroy[i]
            }

            var aroys = []

            var targetIndex = Math.floor(Math.random() * aroy.length)
            var targetValue = aroy[targetIndex]
            var foundIndex
 
            var foundValue = aroy.find(function (value, index, aroy) {
                aroys[index] = aroy
                
                foundIndex = index

                return value === targetValue
            })

            expect(foundValue).toEqual(targetValue)

            expect(foundIndex).toEqual(targetIndex)

            for (var i = 0; i < aroys.length; i++)
                expect(aroys[i]).toEqual(aroy)
            
            for (var i = 0; i < aroy.length; i++)
                expect(aroy[i]).toEqual(copy[i])
        })
    })

    describe('map', function() {
        it('should succeed if it return a new aroy with the results of calling a provided function on every element in the calling aroy', function() {
            var aroy = new Aroy
            aroy.length = Math.floor(Math.random() * 10) + 10
            var copy = []

            for (var i = 0; i < aroy.length; i++) {
                aroy[i] = Math.floor(Math.random() * 100)
                copy[i] = aroy[i]
            }

            var aroys = []
 
            var result = aroy.map(function (value, index, aroy) {
                aroys[index] = aroy

                return value
            })

            expect(result instanceof Aroy).toBeTrue()

            expect(result.length).toEqual(aroy.length)

            for (var i = 0; i < result.length; i++)
                expect(result[i]).toEqual(aroy[i])

            for (var i = 0; i < aroys.length; i++)
                expect(aroys[i]).toEqual(aroy)

            for (var i = 0; i < aroy.length; i++)
                expect(aroy[i]).toEqual(copy[i])
        })
    })

    describe('filter', function() {
        it('should succeed if it return a new aroy with all elements that pass the test implemented by the provided function', function() {
            var aroy = new Aroy
            aroy.length = Math.floor(Math.random() * 10) + 10
            var copy = []

            for (var i = 0; i < aroy.length; i++) {
                aroy[i] = Math.floor(Math.random() * 100)
                copy[i] = aroy[i]
            }

            var aroys = []
 
            var result = aroy.filter(function (value, index, aroy) {
                aroys[index] = aroy

                if (Math.random() < 0.4) return value
            })

            expect(result instanceof Aroy).toBeTrue()

            var testLength = 0
            var j = 0
            for (var i = 0; i < aroy.length; i++) {
                if (aroy[i] === result[j]) {
                    testLength++
                    j++
                }
            }
            expect(result.length).toEqual(testLength)

            expect(aroys.length).toEqual(aroy.length)

            for (var i = 0; i < aroys.length; i++)
                expect(aroys[i]).toEqual(aroy)
            
            for (var i = 0; i < aroy.length; i++)
                expect(aroy[i]).toEqual(copy[i])
        })
    })

    describe('slice', function() {
        it('should succeed if it return a portion of an aroy into a new aroy object selected from start to to - 1 || width from - to', function() {
            // TODO Add another case with from < 0
            // TODO Add another case without to
            // TODO add annotations
            var aroy = new Aroy
            aroy.length = Math.floor(Math.random() * 100) + 100
            var copy = []

            for (var i = 0; i < aroy.length; i++) {
                aroy[i] = Math.floor(Math.random() * 100)
                copy[i] = aroy[i]
            }

            var from = Math.floor(Math.random() * aroy.length / 2)
            
            var to = Math.floor(Math.random() * aroy.length / 2) + from + 1

            var result = aroy.slice(from, to)

            expect(result instanceof Aroy).toBeTrue()

            expect(result.length).toEqual(to - from)

            for (var i = 0; i < result.length; i++)
                expect(result[i]).toEqual(aroy[i + from])

            for (var i = 0; i < aroy.length; i++)
                expect(aroy[i]).toEqual(copy[i])
        })
    })

    describe('splice', function() {
        it('should succeed if it changes the content of aroy removing and adding elements (from | count | elementsToAdd)', function() {
            var aroy = new Aroy

            aroy.length = Math.floor(Math.random() * 100) + 10

            var copy = []

            for (var i = 0; i < aroy.length; i++) {
                aroy[i] = Math.floor(Math.random() * 100)
                copy[i] = aroy[i]
            }
            
            var from = Math.floor(Math.random() * aroy.length / 2)

            var count = Math.floor(Math.random() * (aroy.length - from)) + 1
            
            var args = [from, count]
            args.length += Math.floor(Math.random() * 100) + 1

            for (var j = 2; j < args.length; j++)
                args[j] = Math.floor(Math.random() * 100)

            var result = aroy.splice.apply(aroy, args)

            expect(result.length).toEqual(count)

            for (var i = 0; i < result.length; i++)
                expect(result[i]).toEqual(copy[i + from])

            expect(aroy.length).toEqual((copy.length - count) + (args.length - 2))

            for (var i = 0; i < from; i++)
                expect(aroy[i]).toEqual(copy[i])
            
            for (var i = 2; i < args.length; i++)
                expect(args[i]).toEqual(aroy[from + i - 2])

            for (var i = from + args.length - 2; i < aroy.length; i++)
                expect(aroy[i]).toEqual(copy[i + count - args.length + 2])
        })
        it('should succeed if it changes the content of aroy removing and adding elements (from < 0 | count | elementsToAdd)', function() {
            var aroy = new Aroy

            aroy.length = Math.floor(Math.random() * 100) + 10

            var copy = []

            for (var i = 0; i < aroy.length; i++) {
                aroy[i] = Math.floor(Math.random() * 100)
                copy[i] = aroy[i]
            }
            
            var from = (Math.floor(Math.random() * aroy.length) + 1) * (-1)

            var count = Math.floor(Math.random() * (-1) * from - 1) + 2
            
            var args = [from, count]
            args.length += Math.floor(Math.random() * 100) + 1

            for (var j = 2; j < args.length; j++)
                args[j] = Math.floor(Math.random() * 100)

            var result = aroy.splice.apply(aroy, args)

            expect(result.length).toEqual(count)

            for (var i = 0; i < result.length; i++)
                expect(result[i]).toEqual(copy[i + copy.length + from])

            expect(aroy.length).toEqual((copy.length - count) + (args.length - 2))

            for (var i = 0; i < copy.length + from; i++)
                expect(copy[i]).toEqual(aroy[i])
            
            for (var i = 2; i < args.length; i++)
                expect(args[i]).toEqual(aroy[copy.length + from + i - 2])

            for (var i = copy.length + from + args.length - 2; i < aroy.length; i++)
                expect(aroy[i]).toEqual(copy[i + count - args.length + 2])
        })
        it('should succeed if it changes the content of aroy adding elements (from | count = 0 | elementsToAdd)', function() {
            var aroy = new Aroy

            aroy.length = Math.floor(Math.random() * 100) + 10

            var copy = []

            for (var i = 0; i < aroy.length; i++) {
                aroy[i] = Math.floor(Math.random() * 100)
                copy[i] = aroy[i]
            }
            
            var from = Math.floor(Math.random() * aroy.length / 2)

            var count = 0
            
            var args = [from, count]
            args.length += Math.floor(Math.random() * 100) + 1

            for (var j = 2; j < args.length; j++)
                args[j] = Math.floor(Math.random() * 100)

            var result = aroy.splice.apply(aroy, args)

            expect(result.length).toEqual(count)

            for (var i = 0; i < result.length; i++)
                expect(result[i]).toEqual(copy[i + from])

            expect(aroy.length).toEqual((copy.length - count) + (args.length - 2))

            for (var i = 0; i < from; i++)
                expect(aroy[i]).toEqual(copy[i])
            
            for (var i = 2; i < args.length; i++)
                expect(args[i]).toEqual(aroy[from + i - 2])

            for (var i = from + args.length - 2; i < aroy.length; i++)
                expect(aroy[i]).toEqual(copy[i + count - args.length + 2])
        })
        it('should succeed if it changes the content of aroy removing and adding elements (from | no count | elementsToAdd)', function() {
            var aroy = new Aroy

            aroy.length = Math.floor(Math.random() * 100) + 10

            var copy = []

            for (var i = 0; i < aroy.length; i++) {
                aroy[i] = Math.random().toString(36).substring(Math.floor(Math.random() * 10))
                copy[i] = aroy[i]
            }
            
            var from = Math.floor(Math.random() * aroy.length / 2)
            
            var args = [from]
            args.length += Math.floor(Math.random() * 100) + 1

            for (var j = 1; j < args.length; j++)
                args[j] = Math.random().toString(36).substring(Math.floor(Math.random() * 10))

            var result = aroy.splice.apply(aroy, args)

            expect(result.length).toEqual(copy.length - from)

            for (var i = 0; i < result.length; i++)
                expect(result[i]).toEqual(copy[i + from])

            expect(aroy.length).toEqual(from + args.length - 1)

            for (var i = 0; i < from; i++)
                expect(aroy[i]).toEqual(copy[i])
            
            for (var i = 1; i < args.length; i++)
                expect(args[i]).toEqual(aroy[from + i - 1])
        })
        it('should succeed if it changes the content of aroy removing and adding elements (from | count | elementsToAdd = [])', function() {
            var aroy = new Aroy

            aroy.length = Math.floor(Math.random() * 100) + 10

            var copy = []

            for (var i = 0; i < aroy.length; i++) {
                aroy[i] = Math.floor(Math.random() * 100)
                copy[i] = aroy[i]
            }
            
            var from = Math.floor(Math.random() * aroy.length / 2)

            var count = Math.floor(Math.random() * (aroy.length - from)) + 1

            var result = aroy.splice(from, count)

            expect(result.length).toEqual(count)

            for (var i = 0; i < result.length; i++)
                expect(result[i]).toEqual(copy[i + from])

            expect(aroy.length).toEqual(copy.length - count)

            for (var i = 0; i < from; i++)
                expect(aroy[i]).toEqual(copy[i])

            for (var i = from; i < aroy.length; i++)
                expect(aroy[i]).toEqual(copy[i + count])
        })
    })
}) 
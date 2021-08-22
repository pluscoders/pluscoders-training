describe('concat()')

// 1

var spec = 'should concatenate ["a", "b", "c"] and ["d", "e", "f"] into a new array and return ["a", "b", "c","d", "e", "f"]'

var array1 = ['a','b','c'];
var array2 = ['d','e','f'];
var array = []

var array = concat(array1,array2)

assert(array[0] === array1[0], spec)
assert(array[1] === array1[1], spec)
assert(array[2] === array1[2], spec)
assert(array[3] === array2[0], spec)
assert(array[4] === array2[1], spec)
assert(array[5] === array2[2], spec)


// las pruebas de MANU
var a1 = [1, 2, 3], a2 = [4, 5, 6]

a1.concat(a2)
(6) [1, 2, 3, 4, 5, 6]
var a1 = [1, 2, 3], a2 = [4, 5, 6]

a1.concat()
(3) [1, 2, 3]
var a1 = [1, 2, 3], a2 = [4, 5, 6]

a1.concat(true)
(4) [1, 2, 3, true]
var a1 = [1, 2, 3], a2 = [4, 5, 6]

a1.concat(true, false)
(5) [1, 2, 3, true, false]
var a1 = [1, 2, 3], a2 = [4, 5, 6]

a1.concat(a2, [7, 8, 9], true, false, 'hola mundo')
(12) [1, 2, 3, 4, 5, 6, 7, 8, 9, true, false, "hola mundo"]
var a1 = [1, 2, 3], a2 = [4, 5, 6]

a1.concat(a2, [7, 8, 9], [true, false, 'hola mundo'], [11, 12])
(14) [1, 2, 3, 4, 5, 6, 7, 8, 9, true, false, "hola mundo", 11, 12]

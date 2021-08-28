describe('concat()')

// 1

var spec = 'should concatenate ["a", "b", "c"] and ["d", "e", "f"] into a new array and return ["a", "b", "c","d", "e", "f"]'

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

var newArray = concat(array1, array2)

assert(newArray[0] === array1[0], spec)
assert(newArray[1] === array1[1], spec)
assert(newArray[2] === array1[2], spec)
assert(newArray[3] === array2[0], spec)
assert(newArray[4] === array2[1], spec)
assert(newArray[5] === array2[2], spec)

// 2
var array1 = [1, 2, 3]
var array2 = [4, 5, 6]


var newArray = concat(array1, array2)

assert(newArray[0] === array1[0], spec)
assert(newArray[1] === array1[1], spec)
assert(newArray[2] === array1[2], spec)
assert(newArray[3] === array2[0], spec)
assert(newArray[4] === array2[1], spec)
assert(newArray[5] === array2[2], spec)


// 3
var array5 = ['a', 'b', 'c']
var array6 = ['d', 'e', 'f']

var newArray = concat(array5, array6, 'music')

assert(newArray[0] === array5[0], spec)
assert(newArray[1] === array5[1], spec)
assert(newArray[2] === array5[2], spec)
assert(newArray[3] === array6[0], spec)
assert(newArray[4] === array6[1], spec)
assert(newArray[5] === array6[2], spec)
assert(newArray[6] === 'music', spec)


array1.concat()
    (3)[1, 2, 3]
var array1 = [1, 2, 3], array2 = [4, 5, 6]

array1.concat(true)
    (4)[1, 2, 3, true]
var array1 = [1, 2, 3], array2 = [4, 5, 6]

array1.concat(true, false)
    (5)[1, 2, 3, true, false]
var array1 = [1, 2, 3], array2 = [4, 5, 6]

array1.concat(array2, [7, 8, 9], true, false, 'hola mundo')
    (12)[1, 2, 3, 4, 5, 6, 7, 8, 9, true, false, "hola mundo"]
var array1 = [1, 2, 3], array2 = [4, 5, 6]

array1.concat(array2, [7, 8, 9], [true, false, 'hola mundo'], [11, 12])
    (14)[1, 2, 3, 4, 5, 6, 7, 8, 9, true, false, "hola mundo", 11, 12]

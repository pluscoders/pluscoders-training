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

var spec = 'should concatenate [1, 2, 3] and [4, 5, 6] into a new array and return [1,2,3,4,5,6]'

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

var spec = 'should concatenate ["a", "b", "c"] , ["d", "e", "f"] and "music" into a new array and return ["a", "b", "c","d", "e", "f","music"]'

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

// 4

var spec = 'should concatenate [1, 2, 3]  and true into a new array and return [1,2,3,true]'

var array1 = [1, 2, 3]

var newArray = concat(array1, true)

assert(newArray[0] === array1[0], spec)
assert(newArray[1] === array1[1], spec)
assert(newArray[2] === array1[2], spec)
assert(newArray[3] === true, spec)

// 5

var spec = 'should concatenate [1, 2, 3]  and true into a new array and return [1,2,3,true,false]'

var array1 = [1, 2, 3]

var newArray = concat(array1, true,false)

assert(newArray[0] === array1[0], spec)
assert(newArray[1] === array1[1], spec)
assert(newArray[2] === array1[2], spec)
assert(newArray[3] === true, spec)
assert(newArray[4] === false, spec)

// 6

var spec = 'should concatenate [1, 2, 3] and [4, 5, 6] and [7,8,9] and true, and false and "hola mundo" into a new array and return [1,2,3,true,false]'

var array1 = [1, 2, 3]
var array2 = [4, 5, 6]

var newArray = concat(array1,array2,[7,8,9], true,false,"hola mundo")

assert(newArray[0] === array1[0], spec)
assert(newArray[1] === array1[1], spec)
assert(newArray[2] === array1[2], spec)
assert(newArray[3] === array2[0], spec)
assert(newArray[4] === array2[1], spec)
assert(newArray[5] === array2[2], spec)
assert(newArray[6] === 7, spec)
assert(newArray[7] === 8, spec)
assert(newArray[8] === 9, spec)
assert(newArray[9] === true, spec)
assert(newArray[10] === false, spec)
assert(newArray[11] === 'hola mundo', spec)



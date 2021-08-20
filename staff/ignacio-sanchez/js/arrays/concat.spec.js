describe('concat()')

// 1

var spec = 'should concatenate ["a", "b", "c"] and ["d", "e", "f"] into a new array and return ["a", "b", "c","d", "e", "f"]'

var array1 = ['a','b','c'];
var array2 = ['d','e','f'];
var array3 = []

var array3 = concat(array1,array2)

assert(array3[0] === array1[0], spec)
assert(array3[1] === array1[1], spec)
assert(array3[2] === array1[2], spec)
assert(array3[3] === array2[0], spec)
assert(array3[4] === array2[1], spec)
assert(array3[5] === array2[2], spec)
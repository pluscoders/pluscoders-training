describe('map()')

// 1

var spec = 'should multiply [2, 4, 8] for 2 into a new array and return [4, 8, 16]'

var array1 = [2, 4, 8];
var newArray = []

var newArray = map(array1, function (element) {
    newElement = element * 2
})

assert(newArray[0] === 4, spec)
assert(newArray[1] === 8, spec)
assert(newArray[2] === 16, spec)

// 2

var spec = 'should square roots of the numbers [9, 21, 49] into a new array and return [9, 13, 3]'

var array1 = [81, 169, 9];
var newArray = []

var newArray = map(array1, function (element) {
    newElement = Math.sqrt(element)
})

assert(newArray[0] === 9, spec)
assert(newArray[1] === 13, spec)
assert(newArray[2] === 3, spec)


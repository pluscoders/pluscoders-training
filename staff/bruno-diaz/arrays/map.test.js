console.log('TEST map')

/**
 * Test of map function
 *
 * @function map
 * @variation 1 - Create a new array with all elements that pass callback
 * @param {array} [array] - Array to work - | Random |
 * @yields {boolean} [result] - The pattern was founded in array
 */

console.log(' - CASE create a new array with the values returned by callback')

var array = []
var copy = []
array.length = Math.floor(Math.random() * 100)

for (var i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 100)
    copy[i] = array[i]
}

var result = []
var arrays = []

// APPLY

map(array, function(value, index, array) {
    result[index] = value
    arrays[index] = array
})

// CHECKS

// Result type data
assert(result instanceof Array, 'result must be an array')

// Result is rigth
assert(result.length === array.length, 'result.length is no correct')
for (var i = 0; i < result.length; i++)
    assert(result[i] === array[i], 'result is no correct')

// Each element of array was in function
assert(arrays.length === array.length, 'arrays.length was changed')
for (var j = 0; j < arrays.length; j++)
    assert(arrays[j] === array, 'array was changed')

// Array was not changed
assert(array.length === copy.length, 'array.length is ' + array.length + ' and it should be ' + copy.length)
for (var i = 0; i < array.length; i++)
    assert(array[i] === copy[i], 'array was changed')
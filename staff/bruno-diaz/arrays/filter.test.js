console.log('TEST filter')

/**
 * Test of filter function
 *
 * @function filter
 * @variation 1 - Create a new array with all elements that pass callback
 * @param {array} [array] - Array to work - | Random |
 * @yields {boolean} [result] - The pattern was founded in array
 */

console.log(' - CASE create a new array with the values returned by callback')


var array = []
var copy = []
array.length = Math.floor(Math.random() * 100) + 100

for (var i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 100)
    copy[i] = array[i]
}

var targetIndex = []
targetIndex.length = Math.floor(Math.random() * 5) + 1

for (var i = 0; i < targetIndex.length; i++)
    targetIndex[i] = Math.floor(Math.random() * array.length)

var arrays = []

// APPLY

var result = filter(array, function(value, index, array) {
    arrays[index] = array

    for (var i = 0; i < targetIndex.length; i++)
        if (index === targetIndex[i]) return value
})

// CHECKS

// Result is an array
assert(result instanceof Array, 'result must be an array')
// Result is not empty
// assert(result.length === targetIndex.length, 'result.length is no correct')
// Array was not changed
assert(array.length === copy.length, 'array.length was changed')
for (var i = 0; l < array.length; i++)
    assert(array[i] === copy[i], 'array was changed')

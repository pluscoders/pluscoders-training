console.log('TEST find')

/**
 * Test of find function
 *
 * @function find
 * @variation 1 - Return the value of an array
 * @param {array} [array] - Array to work - | Random |
 * @param {number} [pattern] - Index to start to look for - | Random |
 * @yields {boolean} [result] - The pattern was founded in array
 */

console.log(' - CASE return the value of an array returned of a callback')

var array = []
var copy = []
array.length = Math.floor(Math.random() * 100)

for (var i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 100000)
    copy[i] = array[i]
}

var arrays = []

var index = Math.floor(Math.random() * array.length)
var pattern = array[index]
var foundIndex

// APPLY

var result = find(array, function(value, index, array) {
    arrays[index] = array

    foundIndex = index

    return value === pattern
})

// CHECKS

// Result value
assert(result === pattern, 'result is not the right value')
// Each elements was in callback
for (var i = 0; i < arrays.length; i++)
    assert(arrays[i] === array, 'error')
// Array was changed
assert(array.length === copy.length, 'array was changed')
for (var i = 0; i < array.length; i++)
    assert(array[i] === copy[i], 'array was changed')


/**
 * Test of find function
 *
 * @function find
 * @variation 2 - Not return any element value of the array
 * @param {array} [array] - Array to work - | Random |
 * @param {number} [pattern] - Index to start to look for - | 999999 |
 * @yields {boolean} [result] - The pattern was founded in array
 */

console.log(' - CASE return the value of an array returned of a callback')

var array = []
var copy = []
array.length = Math.floor(Math.random() * 100)

for (var i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 100)
    copy[i] = array[i]
}

var arrays = []

var pattern = 999999

// APPLY

var result = find(array, function(value, index, array) {
    arrays[index] = array

    return value === pattern
})

// CHECKS

// Result value
assert(typeof result == 'undefined', 'result is not the right value')
// Each elements was in callback
for (var i = 0; i < arrays.length; i++)
    assert(arrays[i] === array, 'error')
// Array was changed
assert(array.length === copy.length, 'array was changed')
for (var i = 0; i < array.length; i++)
    assert(array[i] === copy[i], 'array was changed')
console.log('TEST push')

/**
 * Test of push function
 *
 * @function push
 * @variation 1 - Push elements into array
 * @param {array} [array] - Array to work - | Random |
 * @yields {number} [result] - The array.length
 */

console.log(' - CASE push an element into an array')

var length = Math.floor(Math.random() * 100)

var array = []
var mirror = []

for (var i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * 100)
    mirror[i] = array[i]
}

var elementToAdd = Math.floor(Math.random() * 100)

// APPLY

var result = push(array, elementToAdd)

// CHECKS

// Result type data
assert(typeof(result) === 'number', 'result must be a number')

// Result validation
assert(result === mirror.length + 1, 'result is not correct')

// Array was not changed
assert(array[array.length-1] === elementToAdd, 'Not pushed new element into array')
for (var i = 0; i < mirror.length; i++)
    assert(array[i] === mirror[i], 'Any item of the initial array was changed')
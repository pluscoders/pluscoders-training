console.log('TEST slice')

/**
 * Test of slice function
 *
 * @function slice
 * @variation 1 - returns a shallow copy of a portion of an array into a new array object selected from index to end
 * @param {array} [array] - Array to work - | Random |
 * @param {number} [from] - Index to start to look for - | Random |
 * @param {number} [to] - Index to end to look for - | Random |
 * @yields {array} [result] - A copy of a portion of an array
 */

console.log(' - CASE A copy of a portion of an array (from | to | elementsToAdd)')

var array = []
var copy = []
array.length = Math.floor(Math.random() * 100) + 100

for (var i = 0; i < array.length; i++) {
    array[i] = Math.random()
    copy[i] = array[i]
}

var from = Math.floor(Math.random() * array.length / 2)

var to = Math.floor((Math.random() * array.length / 2 ) + array.length / 2)

// APPLY

var result = slice(array, from, to)

// CHECKS

// Result data
console.assert(result instanceof Array, 'result must be an array')
console.assert(result.length === to - from, 'result.length is no correct')
for (var j = 0; j < result.length; j++)
    console.assert(result[j] === array[j + from], 'result is wrong')
    
// Array changes
for (var i = 0; i < copy.length; i++)
    console.assert(copy[i] === array[i], 'array was changed')

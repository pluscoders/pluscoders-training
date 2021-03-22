console.log('TEST reverse')

/**
 * Test of reverse function
 *
 * @function reverse
 * @variation 1 - Change the elements into an array with the opposite position
 * @param {array} [array] - Array to work - | Random |
 * @yields {array} [result] - Change the elements into an array with the opposite position
 */

console.log(' - CASE Change the elements into an array with the opposite position')

var length = Math.floor(Math.random() * 100)

var array = []
var mirror = []

for (var i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * 100)
    mirror[i] = array[i]
}

// APPLY

reverse(array)

// CHECKS

assert(array instanceof Array, 'array must be an array')
assert(array.length === mirror.length, 'array was changed in a wrong way')

var j = mirror.length - 1
for (var i = 0; i < array.length; i++) {
    assert(array[i] === mirror[j], 'array is not the reverse of the initial version')
    j--
}
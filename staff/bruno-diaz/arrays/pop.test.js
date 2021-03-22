console.log('TEST pop')

/**
 * Test of pop function
 *
 * @function pop
 * @variation 1 - Delete the last item into an array
 * @param {array} [array] - Array to work - | Random |
 * @yields {x} [result] - The array's last item
 */

console.log(' - CASE delete the last item into an array')

var array = []
var copy = []
array.length = Math.floor(Math.random() * 100) + 1

for (var i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 100)
    copy[i] = array[i]
}

// APPLY

var result = pop(array)

// CHECKS

// Result check
assert(result === copy[copy.length - 1], 'result is not the right item')
// Array was changed
assert(array.length === copy.length - 1, 'Array must be changed')
for (var i = 0; i < array.length; i++)
    assert(array[i] === copy[i], 'Any item of the initial array was changed')

console.log('TEST splice')

/**
 * Test of splice function
 *
 * @function splice
 * @variation 1 - changes the contents of an array by removing or replacing existing elements and/or adding new elements
 * @param {array} [array] - Array to work - | Random |
 * @param {from} [array] - Start index - | Random |
 * @param {count} [array] - Number of elements - | Random |
 * @yields {array} [result] - Array with count elements
 */

console.log(' - CASE changes the contents of an array by removing or replacing existing elements and/or adding new elements')

var array = []
array.length = Math.floor(Math.random() * 100) + 10

var copy = []

for (var i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 100)
    copy[i] = array[i]
}

var from = Math.floor(Math.random() * array.length / 2)

var count = Math.floor(Math.random() * (array.length - from)) + 1

var args = [array, from, count]
args.length += Math.floor(Math.random() * 100) + 1

for (var j = 3; j < args.length; j++)
    args[j] = Math.floor(Math.random() * 100)

// APPLY

var result = splice.apply(this, args)

// CHECKS

// Result data

assert(result instanceof Array, 'result must be an array')
assert(result.length === count, 'result.length is wrong')

for (var i = 0; i < result.length; i++)
    assert(result[i] === copy[i + from], 'result is wrong')

// Array changes
assert(array.length === (copy.length - count) + (args.length - 3), 'array was not changed right')

for (var i = 0; i < from; i++)
    assert(array[i] === copy[i], 'first part of array was changed')

for (var i = 3; i < args.length; i++)
    assert(args[i] === array[from + i - 3], 'array copy wrong the arguments')

for (var i = from + args.length - 3; i < array.length; i++)
    assert(array[i] === copy[i + count - args.length + 3], 'array change the last items')
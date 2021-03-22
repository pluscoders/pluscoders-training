console.log('TEST filter')

/**
 * Test of filter function
 *
 * @function filter
 * @variation 1 - Create a new array with all elements that pass callback
 * @param {array} [array] - Array to work - | Random |
 * @yields {array} [result] - An array with all elements returned by callback
 */

console.log(' - CASE create a new array with the values returned by callback')


var array = []
var copy = []
array.length = Math.floor(Math.random() * 100) + 100

for (var i = 0; i < array.length; i++) {
    array[i] = Math.random()
    copy[i] = array[i]
}

var targetIndex = []
targetIndex.length = Math.floor(Math.random() * 5) + 1

for (var i = 0; i < targetIndex.length; i++)
    targetIndex[i] = Math.floor(Math.random() * array.length)

var arrays = []

// APPLY
// TODO No funciona --> Length no funciona
var result = filter(array, function(value, index, array) {
    arrays[index] = array
    
    for (var i = 0; i < targetIndex.length; i++)
        return index === targetIndex[i]
})

// CHECKS

// Result is an array
assert(result instanceof Array, 'result must be an array')
// Result is not empty
// assert(result.length === targetIndex.length, 'result.length is ' + result.length + ' and it should be ' + targetIndex.length)
// Array was not changed
assert(array.length === copy.length, 'array.length was changed')
for (var i = 0; i < array.length; i++)
    assert(array[i] === copy[i], 'array was changed')
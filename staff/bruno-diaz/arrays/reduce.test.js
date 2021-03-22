console.log('TEST reduce')

/**
 * Test of reduce function
 *
 * @function reduce
 * @variation 1 - executes a reducer function (that you provide) on each element of the array, resulting in single output value
 * @param {array} [array] - Array to work - | Random |
 * @yields {data} [result] - Resulting in gingle output value
 */

console.log(' - CASE reduce an array through a function')

var array = []
var copy = []
array.length = Math.floor(Math.random() * 1000) + 100  

for (var i = 0; i < array.length; i++) {
    array[i] = Math.random()
    copy[i] = array[i]
}

var mirror = []
var arrays = []
var count = 1

// APPLY

reduce(array, function(accumulator, value, index, array) {
    accumulator++

    mirror[index] = value
    
    arrays[index] = array

    return accumulator
}, count)

// CHECKS

assert(array.length === copy.length)

for (var i = 0; i < copy.length; i++)
    assert(array[i] === copy[i])

assert(mirror.length === array.length)

for (var i = 0; i < mirror.length; i++)
    assert(mirror[i] === array[i])

for (var i = 0; i < array.length; i++)
    assert(arrays[i] === array)
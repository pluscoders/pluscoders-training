console.log('TEST some')

/**
 * Test of some function
 *
 * @function some
 * @variation 1 - tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value
 * @param {array} [array] - Array to work - | Random |
 * @yields {boolean} [result] - Say if any item give true to callback
 */

console.log(' - CASE The method return true')

var array = []
array.length = Math.floor(Math.random() * 100) + 10

var copy = []

for (var i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 100)
    copy[i] = array[i]
}

var targetIndex = Math.floor(Math.random() * array.length)

var arrays = []

// APPLY

var result = some(array, function(value, index, array) {
    arrays[index] = array

    var feedback = false

    if (targetIndex === index) feedback = true

    return feedback
})

// CHECKS

// Result data
assert(typeof result === 'boolean', 'result must be a boolean')
assert(result === true, 'result shuld be true')

// Array was not changed
assert(array.length === copy.length, 'array.length is ' + array.length + ' and it should be ' + copy.length)
for (var i = 0; i < array.length; i++)
    assert(array[i] === copy[i], 'array was changed')

// Each element of array was in function
assert(arrays.length === targetIndex + 1, 'arrays.length is ' + arrays.length + ' and it should be ' + targetIndex + ' + 1')
for (var j = 0; j < arrays.length; j++)
    assert(arrays[j] === array, 'array was changed')


/**
 * Test of some function
 *
 * @function some
 * @variation 2 - tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value
 * @param {array} [array] - Array to work - | Random |
 * @yields {boolean} [result] - Say if any item give true to callback
 */

console.log(' - CASE The method return false')

var array = []
array.length = Math.floor(Math.random() * 100) + 10

var copy = []

for (var i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 100)
    copy[i] = array[i]
}

var targetIndex = array.length

var arrays = []

// APPLY

var result = some(array, function(value, index, array) {
    arrays[index] = array

    var feedback = false

    if (targetIndex === index) feedback = true

    return feedback
})

// CHECKS

// Result data
assert(typeof result === 'boolean', 'result must be a boolean')
assert(result === false, 'result shuld be false')

// Array was not changed
assert(array.length === copy.length, 'array.length is ' + array.length + ' and it should be ' + copy.length)
for (var i = 0; i < array.length; i++)
    assert(array[i] === copy[i], 'array was changed')

// Each element of array was in function
assert(arrays.length === array.length, 'arrays.length is ' + arrays.length + ' and it should be ' + array.length)
for (var j = 0; j < arrays.length; j++)
    assert(arrays[j] === array, 'array was changed')
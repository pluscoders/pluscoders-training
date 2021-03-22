console.log('TEST every')

/**
 * Test of every function
 *
 * @function every
 * @variation 1 - tests whether all elements in the array pass the test implemented by the provided function
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

var arrays = []

// APPLY

var result = every(array, function(value, index, array) {
    arrays[index] = array

    return typeof value === 'number'
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
assert(arrays.length === array.length, 'arrays.length was changed')
for (var j = 0; j < arrays.length; j++)
    assert(arrays[j] === array, 'array was changed')


/**
 * Test of every function
 *
 * @function every
 * @variation 2 - tests whether all elements in the array pass the test implemented by the provided function
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

targetIndex = Math.floor(Math.random() * array.length)
array[targetIndex] = Math.random().toString(36).substring(7);
copy[targetIndex] = array[targetIndex]

var arrays = []

// APPLY

var result = every(array, function(value, index, array) {
    arrays[index] = array

    return typeof value === 'number'
})

// CHECKS

// Result data
assert(typeof result === 'boolean', 'result must be a boolean')
assert(result === false, 'result shuld be true')

// Array was not changed
assert(array.length === copy.length, 'array.length is ' + array.length + ' and it should be ' + copy.length)
for (var i = 0; i < array.length; i++)
    assert(array[i] === copy[i], 'array was changed')

// Each element of array was in function
assert(arrays.length === targetIndex + 1, 'arrays.length is ' + arrays.length + ' and it should be ' + targetIndex + ' + 1')
for (var j = 0; j < arrays.length; j++)
    assert(arrays[j] === array, 'array was changed')
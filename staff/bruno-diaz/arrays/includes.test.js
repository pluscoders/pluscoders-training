console.log('TEST includes')

/**
 * Test of includes function
 *
 * @function includes
 * @variation 1 - A pattern is founded in the array from index
 * @param {array} [array] - Array to work - | Random |
 * @param {number} [pattern] - Index to start to look for - | Random |
 * @param {number} [from] - Index to start to look for - | Random |
 * @yields {boolean} [result] - The pattern was founded in array
 */

console.log(' - CASE A pattern is into an array from index')

var array = []
var mirror = []
array.length = Math.floor(Math.random() * 100)

for (var i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 100)
    mirror[i] = array[i]
}

var index = Math.floor(Math.random() * array.length)
var pattern = array[index]

var from = Math.floor(Math.random() * index)

// APPLY

var result = includes(array, pattern, from)

// CHECKS
// Result is a boolean data
assert(typeof(result) === 'boolean', 'result must be a boolean')
// Result is true
assert( result === true, 'result is wrong')
// Array was changed
assert(array.length === mirror.length, 'array was changed')
// Any element in array was changed
for (var i = 0; i < array.length; i++)
    assert(array[i] === mirror[i], 'Any element in array was changed')


/**
 * Test of includes function
 *
 * @function includes
 * @variation 2 - A pattern is founded in the array from index
 * @param {array} [array] - Array to work - | Random |
 * @param {number} [pattern] - Index to start to look for - | Random |
 * @param {number} [from] - Index to start to look for - | Random < 0|
 * @yields {boolean} [result] - The pattern was founded in array
 */

console.log(' - CASE A pattern is into an array with negative from')

var array = []
var mirror = []
array.length = Math.floor(Math.random() * 100)

for (var i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 100)
    mirror[i] = array[i]
}

var index = Math.floor(Math.random() * array.length)
var pattern = array[index]

var from = (array.length - index) * (-1)

// APPLY

var result = includes(array, pattern, from)

// CHECKS
// Result is a boolean data
assert(typeof(result) === 'boolean', 'result must be a boolean')
// Result is true
assert( result === true, 'result is wrong')
// Array was changed
assert(array.length === mirror.length, 'array was changed')
// Any element in array was changed
for (var i = 0; i < array.length; i++)
    assert(array[i] === mirror[i], 'Any element in array was changed')


/**
 * Test of includes function
 *
 * @function includes
 * @variation 3 - A pattern is founded in the array without index
 * @param {array} [array] - Array to work - | Random |
 * @param {number} [pattern] - Index to start to look for - | Random |
 * @yields {boolean} [result] - The pattern was founded in array
 */

console.log(' - CASE A pattern is into an array without from')

var array = []
var mirror = []
array.length = Math.floor(Math.random() * 100)

for (var i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 100)
    mirror[i] = array[i]
}

var index = Math.floor(Math.random() * array.length)
var pattern = array[index]

// APPLY

var result = includes(array, pattern)

// CHECKS
// Result is a boolean data
assert(typeof(result) === 'boolean', 'result must be a boolean')
// Result is true
assert( result === true, 'result is wrong')
// Array was changed
assert(array.length === mirror.length, 'array was changed')
// Any element in array was changed
for (var i = 0; i < array.length; i++)
    assert(array[i] === mirror[i], 'Any element in array was changed')


/**
 * Test of includes function
 *
 * @function includes
 * @variation 4 - A pattern is not founded in the array becaise it is not in array
 * @param {array} [array] - Array to work - | Random |
 * @param {number} [pattern] - Index to start to look for - | 999999 |
 * @param {number} [from] - Index to start to look for - | Random |
 * @yields {boolean} [result] - The pattern was founded in array
 */

console.log(' - CASE A pattern is not into an array')

var array = []
var mirror = []
array.length = Math.floor(Math.random() * 100)

for (var i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 100)
    mirror[i] = array[i]
}

var pattern = 999999

var from = Math.floor(Math.random() * array.length)

// APPLY

var result = includes(array, pattern, from)

// CHECKS
// Result is a boolean data
assert(typeof(result) === 'boolean', 'result must be a boolean')
// Result is false
assert( result === false, 'result is wrong')
// Array was changed
assert(array.length === mirror.length, 'array was changed')
// Any element in array was changed
for (var i = 0; i < array.length; i++)
    assert(array[i] === mirror[i], 'Any element in array was changed')


/**
 * Test of includes function
 *
 * @function includes
 * @variation 5 - A pattern is not founded in the array because it is before from
 * @param {array} [array] - Array to work - | Random |
 * @param {number} [pattern] - Index to start to look for - | Random |
 * @param {number} [from] - Index to start to look for - | Random |
 * @yields {boolean} [result] - The pattern was founded in array
 */

console.log(' - CASE A pattern is into an array before from')

var array = []
var mirror = []
array.length = Math.floor(Math.random() * 100)

for (var i = 0; i < array.length; i++) {
    array[i] = Math.random()
    mirror[i] = array[i]
}

var index = Math.floor(Math.random() * (array.length - 1))
var pattern = array[index]

var from = index + 1

// APPLY

var result = includes(array, pattern, from)

// CHECKS
// Result is a boolean data
assert(typeof(result) === 'boolean', 'result must be a boolean')
// Result is false
assert( result === false, 'result is wrong')
// Array was changed
assert(array.length === mirror.length, 'array was changed')
// Any element in array was changed
for (var i = 0; i < array.length; i++)
    assert(array[i] === mirror[i], 'Any element in array was changed')
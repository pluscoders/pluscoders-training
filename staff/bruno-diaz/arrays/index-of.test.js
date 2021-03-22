console.log('TEST indexOf')

/**
 * Test of indexOf function
 *
 * @function indexOf
 * @variation 1 - A pattern is founded in the array from index
 * @param {array} [array] - Array to work - | Random |
 * @param {number} [pattern] - Index to start to look for - | Random |
 * @param {number} [from] - Index to start to look for - | Random |
 * @yields {number} [result] - The index of the value equal to the pattern
 */

console.log(' - CASE includes a pattern in array from index position')

var array = []
array.length = Math.floor(Math.random() * 100) + 50
var copy = []

for (var i = 0; i < array.length; i++) {
    array[i] = Math.random() * Math.random()
    copy[i] = array[i]
}

var index = Math.floor(Math.random() * array.length)
var pattern = array[index]

var from = Math.floor(Math.random() * index)

// APPLY

var result = indexOf(array, pattern, from)

// CHECKS

// Result format
assert(typeof result === 'number', 'Result have to be a number')
// Result value
assert(result === index, 'Result is wrong: It is ' + result + ' and It should be: ' + index)
// Original array was not changed - length
assert(array.length === copy.length, 'Array was changed')
// Original array was not changed - value by value
for (var i = 0; i < array.length; i++)
    assert(array[i] === copy[i], 'Element of array was changed')


/**
 * Test of indexOf function
 *
 * @function indexOf
 * @variation 2 - A pattern is founded in the array from index
 * @param {array} [array] - Array to work - | Random |
 * @param {number} [pattern] - Index to start to look for - | Random |
 * @param {number} [from] - Index to start to look for - | Random < 0 |
 * @yields {number} [result] - The index of the value equal to the pattern
 */

console.log(' - CASE includes a pattern in array from index position under zero')

var array = []
array.length = Math.floor(Math.random() * 1000) + 50
var copy = []

for (var i = 0; i < array.length; i++) {
    array[i] = Math.random() * Math.random()
    copy[i] = array[i]
}

var index = Math.floor(Math.random() * array.length)
var pattern = array[index]

var from = (array.length - index) * (-1)

// APPLY

var result = indexOf(array, pattern, from)

// CHECKS

// Result format
assert(typeof result === 'number', 'Result have to be a number')
// Result value
assert(result === index, 'Result is wrong: It is ' + result + ' and It should be: ' + index)
// Original array was not changed - length
assert(array.length === copy.length, 'Array was changed')
// Original array was not changed - value by value
for (var i = 0; i < array.length; i++)
    assert(array[i] === copy[i], 'Element of array was changed')


/**
 * Test of indexOf function
 *
 * @function indexOf
 * @variation 3 - A pattern is founded in the array without index where start
 * @param {array} [array] - Array to work - | Random |
 * @param {number} [pattern] - Index to start to look for - | Random |
 * @yields {number} [result] - The index of the value equal to the pattern
 */

console.log(' - CASE includes a pattern in array without index from')

var array = []
array.length = Math.floor(Math.random() * 1000) + 50
var copy = []

for (var i = 0; i < array.length; i++) {
    array[i] = Math.random() * Math.random()
    copy[i] = array[i]
}

var index = Math.floor(Math.random() * array.length)
var pattern = array[index]

// APPLY

var result = indexOf(array, pattern)

// CHECKS

// Result format
assert(typeof result === 'number', 'Result have to be a number')
// Result value
assert(result === index, 'Result is wrong: It is ' + result + ' and It should be: ' + index)
// Original array was not changed - length
assert(array.length === copy.length, 'Array was changed')
// Original array was not changed - value by value
for (var i = 0; i < array.length; i++)
    assert(array[i] === copy[i], 'Element of array was changed')


/**
 * Test of indexOf function
 *
 * @function indexOf
 * @variation 4 - A pattern not founded in the array from index
 * @param {array} [array] - Array to work - | Random |
 * @param {number} [pattern] - Index to start to look for - | Random |
 * @param {number} [from] - Index to start to look for - | Random < 0 |
 * @yields {number} [result] - Value -1
 */

console.log(' - CASE a pattern is not include in an array')

var array = []
array.length = Math.floor(Math.random() * 100) + 50
var copy = []

for (var i = 0; i < array.length; i++) {
    array[i] = Math.random() * Math.random()
    copy[i] = array[i]
}

var index = Math.floor(Math.random() * array.length)
var pattern = array[index]

var from = index + 1

// APPLY

var result = indexOf(array, pattern, from)

// CHECKS

// Result format
assert(typeof result === 'number', 'Result have to be a number')
// Result value
assert(result === -1, 'Result is wrong: It is ' + result + ' and It should be: -1')
// Original array was not changed - length
assert(array.length === copy.length, 'Array was changed')
// Original array was not changed - value by value
for (var i = 0; i < array.length; i++)
    assert(array[i] === copy[i], 'Element of array was changed')
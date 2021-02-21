console.log('TEST reduce')

console.log('CASE reduce an array through a function')

var length = Math.floor(Math.random() * 1000) + 100  

var array = []
var copy = []

for (var i = 0; i < length; i++) {
    array[i] = Math.random()
    copy[i] = array[i]
}

var mirror = []
var arrays = []
var count = 1

reduce(array, function(accumulator, value, index, array) {
    accumulator++
    mirror[index] = value
    arrays[index] = array

    return accumulator
}, count)

assert(array.length === copy.length)

for (var i = 0; i < copy.length; i++)
    assert(array[i] === copy[i], i)

assert(mirror.length === array.length)

for (var i = 0; i < mirror.length; i++)
    assert(mirror[i] === array[i])

for (var i = 0; i < array.length; i++)
    assert(arrays[i] === array)


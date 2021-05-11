console.log('TEST forEach')

console.log('CASE copy an array into another')

var length = Math.floor(Math.random() * 1000) + 100  

var array = []
var values = []

for (var i = 0; i < length; i++) {
    array[i] = Math.random()
    values[i] = array[i]
}

var copy = []
var arrays = []

forEach(array, function(value, index, array) {
    copy[index] = value
    arrays[index] = array
})

assert(array.length === values.length)

for (var i = 0; i < values.length; i++)
    assert(array[i] === values[i], i)

assert(copy.length === array.length)

for (var i = 0; i < copy.length; i++)
    assert(copy[i] === array[i])

for (var i = 0; i < array.length; i++)
    assert(arrays[i] === array)

console.log('CASE ...')
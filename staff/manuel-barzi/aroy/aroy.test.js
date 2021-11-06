console.log('TEST Aroy')

console.log('TEST Aroy.prototype.forEach')

console.log('CASE copy an aroy into an array')

var length = Math.floor(Math.random() * 1000) + 100  

var array = new Aroy()
var values = []

for (var i = 0; i < length; i++) {
    array[i] = Math.random()
    array.length++
    values[i] = array[i]
}

var copy = []
var arrays = []

array.forEach(function(value, index, array) {
    copy[index] = value
    arrays[index] = array
})

console.assert(array.length === values.length)

for (var i = 0; i < values.length; i++)
    console.assert(array[i] === values[i], i)

console.assert(copy.length === array.length)

for (var i = 0; i < copy.length; i++)
    console.assert(copy[i] === array[i])

for (var i = 0; i < array.length; i++)
    console.assert(arrays[i] === array)

console.log('CASE ...')

console.log('TEST Aroy.prototype.push')

console.log('CASE ...')

console.log('CASE ...')

console.log('TEST Aroy.prototype.pop')

console.log('CASE ...')

console.log('CASE ...')

console.log('TEST Aroy.prototype.map')

console.log('CASE ...')

console.log('CASE ...')
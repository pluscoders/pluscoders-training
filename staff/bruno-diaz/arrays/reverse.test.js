console.log('TEST reverse')


console.log('CASE Change the elements into an array with the opposite position')

var length = Math.floor(Math.random() * 100)

var array = []
var mirror = []

for (var i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * 100)
    mirror[i] = array[i]
}

reverse(array)

// Checks

assert(array instanceof Array, 'array must be an array')
assert(array.length === mirror.length, 'array was changed in a wrong way')

var j = mirror.length - 1
for (var i = 0; i < array.length; i++) {
    assert(array[i] === mirror[j], 'array is not the reverse of the initial version')
    j--
}
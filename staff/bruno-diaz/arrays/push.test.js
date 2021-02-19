console.log('TEST push')


console.log('CASE push an element into an array')

var length = Math.floor(Math.random() * 100)

var array = []
var mirror = []

for (var i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * 100)
    mirror[i] = array[i]
}

var elementToAdd = Math.floor(Math.random() * 100)

var result = push(array, elementToAdd)

// Checks

assert(typeof(result) === 'number', 'result must be a number')

assert(result === mirror.length + 1, 'result is not correct')

for (var i = 0; i < mirror.length; i++)
    assert(array[i] === mirror[i], 'Any item of the initial array was changed')

assert(array[array.length-1] === elementToAdd, 'Not pushed new element into array')
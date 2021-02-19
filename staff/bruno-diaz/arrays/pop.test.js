console.log('TEST pop')


console.log('CASE delete the last item into an array')

var length = Math.floor(Math.random() * 100)

var array = []
var mirror = []

for (var i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * 100)
    mirror[i] = array[i]
}

var result = pop(array)

// Checks

assert(result === mirror[mirror.length - 1], 'result is not the right item')
assert(array.length === mirror.length - 1, 'Array must be changed')

for (var i = 0; i < array.length; i++)
    assert(array[i] === mirror[i], 'Any item of the initial array was changed')

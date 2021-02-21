console.log('TEST pop')


console.log(' - CASE delete the last item into an array')


var array = []
var copy = []
array.length = Math.floor(Math.random() * 100)

for (var i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 100)
    copy[i] = array[i]
}

// Apply

var result = pop(array)

// Checks

assert(result === copy[copy.length - 1], 'result is not the right item')
assert(array.length === copy.length - 1, 'Array must be changed')

for (var i = 0; i < array.length; i++)
    assert(array[i] === copy[i], 'Any item of the initial array was changed')

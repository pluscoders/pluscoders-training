console.log('TEST includes')


console.log('CASE Search a pattern into an array and give us an boolean')

var length = Math.floor(Math.random() * 100)

var array = []
var mirror = []

for (var i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * 100)
    mirror[i] = array[i]
}

var pattern = Math.floor(Math.random() * 100)
var from = Math.floor(Math.random() * 95)

for (var i = from; i < from + patternLength; i++)  --> No funciona, busca elementos
    pattern[pattern.length] = array[i]

var index = Math.floor(Math.random() * 200) - 100

includes(array, pattern, index)

// Checks

assert(typeof(result) === 'boolean', 'result must be a boolean')
assert(array.length === mirror.length, 'array was changed')

if (result) {
    for (var i ; i < array.length; i++)
    pattern[pattern.length] = array[i]
}

for (var i = 0; i < array.length; i++)
    assert(array[i] === mirror[i], 'array was changed')

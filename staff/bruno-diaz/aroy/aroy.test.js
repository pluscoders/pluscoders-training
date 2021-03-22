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


console.log('TEST Aroy.prototype.push')

console.log('CASE push an element into an aroy')

var length = Math.floor(Math.random() * 100)

var array = new Aroy()
var mirror = new Aroy()

for (var i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * 100)
    mirror[i] = array[i]
}

var elementToAdd = Math.floor(Math.random() * 100)

var result = array.push(elementToAdd)

console.assert(typeof(result) === 'number', 'result must be a number')

console.assert(result === mirror.length + 1, 'result is not correct')

for (var i = 0; i < mirror.length; i++)
    console.assert(array[i] === mirror[i], 'Any item of the initial array was changed')

console.assert(array[array.length-1] === elementToAdd, 'Not pushed new element into array')


console.log('TEST Aroy.prototype.pop')

console.log('CASE delete the aroy`s last item')

var length = Math.floor(Math.random() * 100)

var aroy = new Aroy()
var mirror = []

for (var i = 0; i < length; i++) {
    aroy[i] = Math.floor(Math.random() * 100)
    mirror[i] = aroy[i]
}

var result = aroy.pop()

console.assert(result === mirror[mirror.length - 1], 'result is not the right item')
console.assert(aroy.length === mirror.length - 1, 'aroy is wrong')

for (var i = 0; i < aroy.length; i++)
    console.assert(aroy[i] === mirror[i], 'Any item of the initial aroy was changed')


console.log('TEST Aroy.prototype.reverse')

console.log('CASE change the items of an aroy to a reverse position')

var length = Math.floor(Math.random() * 100)

var array = new Aroy()
var mirror = new Aroy()

for (var i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * 100)
    mirror[i] = array[i]
}

console.assert(array instanceof Array, 'array must be an array')
console.assert(array.length === mirror.length, 'array was changed in a wrong way')

var j = mirror.length - 1
for (var i = 0; i < array.length; i++) {
    console.assert(array[i] === mirror[j], 'array is not the reverse of the initial version')
    j--
}

array.reverse()

console.log('TEST Aroy.prototype.map')

console.log('CASE ...')

console.log('CASE ...') 
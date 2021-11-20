// reverse.spec.js


// 1

var animals = ["pigs", "goats", "sheep", "chickens", "cats", "dogs"]

var r = reverse(animals)

console.assert(r instanceof Array)
console.assert(r.length === 6)
console.assert(r[0] === 'dogs')
console.assert(r[1] === 'cats')
console.assert(r[2] === 'chickens')
console.assert(r[3] === 'sheep')
console.assert(r[4] === 'goats')
console.assert(r[5] === 'pigs')

// 2

var array = ['element0']

var r = reverse(array)

console.assert(r instanceof Array)
console.assert(r.length === array.length)
console.assert(r[0] === array[0])
// splice.spec.js

var array = ['Jan', 'Feb', 'March', 'April', 'June', 'July']

// 1

var r = splice(2, 3, 'monthRandom')

console.assert(r instanceof Array)
console.assert(r.length === 3)
console.assert(r[0] === 'March')
console.assert(r[1] === 'April')
console.assert(r[2] === 'June')
console.assert(array[2] === 'monthRandom')

// 2

var r = splice(1, 1, 'monthRandom')

console.assert(r instanceof Array)
console.assert(r.length === 1)
console.assert(r[0] === 'Feb')
console.assert(array[1] === 'monthRandom')

// 3

var array = ['Jan', 'Feb', 'March', 'April', 'June', 'July']
var r = splice(3, 0, 'monthRandom')

console.assert(r instanceof Array)
console.assert(array[3] === 'monthRandom')
console.assert(array.length === 7)
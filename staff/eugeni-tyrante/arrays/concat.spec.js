// concat.spec.js

// 1

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var array3 = ['g', 'h', 'i'];

var r = concat(array1, array2, array3)

console.assert(r instanceof Array)
console.assert(r.length === 9)
console.assert(r[0] === 'a')
console.assert(r[1] === 'b')
console.assert(r[2] === 'c')
console.assert(r[3] === 'd')
console.assert(r[4] === 'e')
console.assert(r[5] === 'f')
console.assert(r[6] === 'g')
console.assert(r[7] === 'h')
console.assert(r[8] === 'i')
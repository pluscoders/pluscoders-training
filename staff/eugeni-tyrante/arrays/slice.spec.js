// slice.spec.js

var a = [1, 2, 3]

// 1

//a.slice(1, 2) // [2]

var r = slice(a, 1, 2)

console.assert(r instanceof Array)
console.assert(r.length === 1)
console.assert(r[0] === 2)
console.assert(r !== a)

// 2

//a.slice(1, 3) // [2, 3]

var r = slice(a, 1, 3)

console.assert(r instanceof Array)
console.assert(r.length === 2)
console.assert(r[0] === 2)
console.assert(r[1] === 3)
console.assert(r !== a)
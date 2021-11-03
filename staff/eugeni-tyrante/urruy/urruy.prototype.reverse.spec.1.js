// urruy.prototype.reverse.spec.js

// 1

var urr = new Urruy

urr[0] = 1
urr[1] = 2
urr[2] = 3
urr[3] = 4
urr.length = 4

var r = urr.reverse()

console.assert(r.length === urr.length)
console.assert(r[0] === 4)
console.assert(r[1] === 3)
console.assert(r[2] === 2)
console.assert(r[3] === 1)
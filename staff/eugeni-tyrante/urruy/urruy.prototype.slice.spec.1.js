// urruy.prototype.slice.spec.js

// 1

var urr = new Urruy

urr[0] = 1
urr[1] = 2
urr[2] = 3
urr[3] = 4
urr[4] = 5
urr.length = 5

var r = urr.slice(0,3)

console.assert(r[0] === 1)
console.assert(r[1] === 2)
console.assert(r[2] === 3)

// 2

var urr = new Urruy

urr[0] = 1
urr[1] = 2
urr[2] = 3
urr[3] = 4
urr[4] = 5
urr.length = 5

var r = urr.slice(2,50)

console.assert(r[0] === 3)
console.assert(r[1] === 4)
console.assert(r[2] === 5)
// urruy.prototype.splice.spec.js

// 1

var urr = new Urruy

urr[0] = 1
urr[1] = 2
urr[2] = 3
urr[3] = 4
urr[4] = 5
urr.length = 5

var r = urr.splice(0, 2)

console.assert(r[0] === 1)
console.assert(r[1] === 2)
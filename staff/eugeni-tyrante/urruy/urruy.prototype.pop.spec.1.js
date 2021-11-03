// urruy.prototype.pop.spec.js

// 1

var urr = new Urruy
urr[0] = 1
urr[1] = 2
urr[2] = 3
urr[3] = 4
urr.length = 4

var r = urr.pop()

console.assert(r === 4)
console.assert(urr[0] === 1)
console.assert(urr[1] === 2)
console.assert(urr[2] === 3)
console.assert(urr.length === 3)
// urruy.prototype.map.spec.js

// 1

var urr = new Urruy

urr[0] = 1
urr[1] = 5
urr[2] = 15
urr[3] = 20
urr.length = 4

var r = urr.map(function (element) {
    return element * 2
})

console.assert(r.length === urr.length)
console.assert(r[0] === 2)
console.assert(r[1] === 10)
console.assert(r[2] === 30)
console.assert(r[3] === 40)
// urruy.prototype.find.spec.js

// 1

var urr = new Urruy

urr[0] = 1
urr[1] = 5
urr[2] = 15
urr[3] = 20
urr.length = 4

var r = urr.find (function (element) {
    return element > 12
})

console.assert(r === 15)

// 2

var r = urr.find (function (element) {
    return element > 20
})

console.assert(r === undefined)
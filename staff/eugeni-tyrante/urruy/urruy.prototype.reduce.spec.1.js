// urruy.prototype.reduce.spec.js

// 1

var urr = new Urruy

urr[0] = 1
urr[1] = 2
urr[2] = 3
urr[3] = 4
urr.length = 4

var r = urr.reduce (function callback (accumulator, currentValue) {
    return accumulator + currentValue
})

console.assert(r === 10)
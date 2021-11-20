// urruy.prototype.filter.spec.js

// 1

var urr = new Urruy
urr[0] = 1
urr[1] = 2
urr[2] = 3
urr[3] = 4
urr[4] = 5
urr.length = 5

var r = urr.filter(function(element, i, urruy) {
    if (element > 3)
    return true
})

console.assert(r[0] === 4)
console.assert(r[1] === 5)
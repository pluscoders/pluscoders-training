// reduce.spec.js

// 1

var array1 = [2, 8575.34, 342, 324234]

var r = reduce(array1, function callback (accumulator, currentValue) {
    return accumulator + currentValue
})

console.assert(r === 333153.34)

//  2

var r = reduce(array1, function callback (accumulator, currentValue) {
    return accumulator - currentValue
})

console.assert(r === -333149.34)

// 3

var r = reduce(array1, function callback (accumulator, currentValue) {
    return accumulator * currentValue
})

console.assert(r === 1901805084059.0403)

// 4

var array1 = [200, 20, 10]

var r = reduce(array1, function callback (accumulator, currentValue) {
    return accumulator / currentValue
})

console.assert(r ===1)
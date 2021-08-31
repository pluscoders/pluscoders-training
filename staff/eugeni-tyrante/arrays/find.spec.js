// find.spec.js

// 1

var a = [1, 2, 3]

var r = find(pandora, function (element, index, array) {

return element > 12
})

console.assert(r === 3)

// 2

var r = find(pandora, function (element, index, array) {

return element > 4
})

console.assert(r === undefined)

//VM8283:12 1 0 (3) [1, 2, 3]
//VM8283:12 2 1 (3) [1, 2, 3]
//VM8283:12 3 2 (3) [1, 2, 3]
undefined
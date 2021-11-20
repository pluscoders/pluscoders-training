// push.spec.js

// 1

var a = ['pigs', 'goats', 'sheep']
var r = push(a, ['chickens', 'cats', 'dogs'])

console.assert(a instanceof Array)
console.assert(r === 6)
console.assert(a[0] === 'pigs')
console.assert(a[1] === 'goats')
console.assert(a[2] === 'sheep')
console.assert(a[3] === 'chickens')
console.assert(a[4] === 'cats')
console.assert(a[5] === 'dogs')
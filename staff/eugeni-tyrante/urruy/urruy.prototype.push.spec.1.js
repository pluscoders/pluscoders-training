// urruy.prototype.push.spec.js

// 1

var a = new Urruy

a[0] = 'pigs'
a[1] = 'goats'
a[2] = 'sheep'
a.length = 3

a.push('chickens', 'cats', 'dogs')

console.assert(a[0] === 'pigs')
console.assert(a[1] === 'goats')
console.assert(a[2] === 'sheep')
console.assert(a[3] === 'chickens')
console.assert(a[4] === 'cats')
console.assert(a[5] === 'dogs')
console.assert(a.length === 6)
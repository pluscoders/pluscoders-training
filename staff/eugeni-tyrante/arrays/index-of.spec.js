// indexOf.spec.js

// 1

var beasts = ['ant', 'bison', 'camel', 'duck', 'seal']

var r = indexOf(beasts, 'bison', 1)

console.assert(r === 1)

// 2

var beasts = ['ant', 'bison', 'camel', 'duck', 'seal']

var r = indexOf(beasts, 'bison', 3)

console.assert(r === -1)

// 3

var beasts = ['ant', 'bison', 'camel', 'duck', 'seal']

var r = indexOf(beasts, 'dino', 7)

console.assert(r === -1)
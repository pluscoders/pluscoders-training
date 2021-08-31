// pop.spec.js

// 1

var animals = ["pigs", "goats", "sheep", "chickens", "cats", "dogs"]

var r = pop(animals)

console.assert(r === 'dogs')
console.assert(r.length === 4)
console.assert(r != animals)

// 2

var nums = [1, 2, 3, 4, 5, 6]

var r = pop(nums)

console.assert(r != Array)
console.assert(r === 6)
console.assert(r != nums)
console.assert(nums.length === 5)
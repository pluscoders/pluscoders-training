// pop.spec.js

// 1

var animals = ["pigs", "goats", "sheep", "chickens", "cats", "dogs"]
var popped = []

var r = pop(animals)

console.assert(r instanceof Array)
console.assert(r[0] === 'dogs')
console.assert(r.length === 1)
console.assert(r != animals)
console.assert(animals.length === 5)

// 2

var nums = [1, 2, 3, 4, 5, 6]
var popped = []

var r = pop(nums)

console.assert(r instanceof Array)
console.assert(r[0] === 6)
console.assert(r.length === 1)
console.assert(r != nums)
console.assert(nums.length === 5)
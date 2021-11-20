// includes.spec.js

// 1

var animals = ["pigs", "goats", "sheep", "chickens", "cats", "dogs"]

var r = includes(animals, 'dinosaur', 1)

console.assert(r === false)

// 2

var animals = ["pigs", "goats", "sheep", "chickens", "cats", "dogs"]

var r = includes(animals, 'goats', 1)

console.assert(r === true)

// 3

var animals = ["pigs", "goats", "sheep", "chickens", "cats", "dogs"]

var r = includes(animals, 'pigs', 7)

console.assert(r === false)
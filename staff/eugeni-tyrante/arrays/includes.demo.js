// includes.demo.js

// includes without fromIndex


// 1

var animals = ["pigs", "goats", "sheep", "chickens", "cats", "dogs"]

includes(animals, 'goats')
true

// 2

var animals = ["pigs", "goats", "sheep", "chickens", "cats", "dogs"]

includes(animals, 'dinosaur')
false

// includes with fromIndex


// 1

var animals = ["pigs", "goats", "sheep", "chickens", "cats", "dogs"]

includes(animals, 'goats', 2)
false

// 2

var animals = ["pigs", "goats", "sheep", "chickens", "cats", "dogs"]

includes(animals, 'goats', 1)
true

// 3

var animals = ["pigs", "goats", "sheep", "chickens", "cats", "dogs"]

includes(animals, 'dinosaur', 1)
false
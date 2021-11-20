// filter.demo.js

// 1

var array1 = ["pigs", "goats", "sheep", "chickens", "cats", "dogs"]
var element = 4

filter(array1, function(element, i, array) {
    if (array[i].length > element)
        return true
})
(3) ["goats", "sheep", "chickens"]

// 2

var array1 = ["pigs", "goats", "sheep", "chickens", "cats", "dogs"]
var element = 5

filter(array1, function(element, i, array) {
    if (array[i].length > element)
        return true
})
["chickens"]
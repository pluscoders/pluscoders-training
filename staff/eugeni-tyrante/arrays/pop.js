// pop.js

var animals = ["pigs", "goats", "sheep", "chickens", "cats", "dogs"]

function pop(array) {
    var popped = []
    popped[popped.length] = array[array.length - 1]
    array.length = array.length - 1
    return popped
}
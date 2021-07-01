// reverse.js

var animals = ["pigs", "goats", "sheep", "chickens", "cats", "dogs"]

function reverse(array) {
    var reversed = []
    for (var i = array.length - 1; i > -1; i--) {
        reversed[reversed.length] = array[i]
    }
return reversed
}
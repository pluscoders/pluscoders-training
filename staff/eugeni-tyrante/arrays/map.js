// map.js

var array1 = [1, 5, 10, 20]
var result = []

function map(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var index = i
        var element = 2
        callback(element, index, array)
        result[i] = array1[i] * element
    }
    return result
}

map(array1, function(element, index, array) {
    console.log(element, index, array)
})
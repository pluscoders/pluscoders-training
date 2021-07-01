// map.js

var result = []

function map(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(element, i, array)
        result[i] = array1[i] * element
    }
    return result
}
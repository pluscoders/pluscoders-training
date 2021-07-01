// for-each.js

var a = [1, 2, 3, 4, 5]

function forEach(array, callback) {
    for (var i = 0; i < a.length; i++) {
        callback(array[i], i, array)
    }
}

function callback(element, index, array) {
    console.log(element, index, array)
}
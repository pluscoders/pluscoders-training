// find.js

var a = [1, 2, 3]

function find(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        if (callback(element, i, array)) return element
    }
}

find(a, function(element, index, array) {
    console.log(element, index, array)

    return element > 2
})
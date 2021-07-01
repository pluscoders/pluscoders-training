// filter.js

function filter(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var element = 5
        callback(element)
        if (array[i].length > element) {
            checked[checked.length] = array[i]
        }
    }
    return checked
}

filter(array1, function(element) {
})
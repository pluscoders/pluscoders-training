// filter.js

function filter(array, callback) {
    var checked = []
    for (var i = 0; i < array.length; i++) {
        if (callback(element, i, array)) {
            checked[checked.length] = array[i]
        }
    }
return checked
}
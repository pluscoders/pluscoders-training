// index-of.js

function indexOf(array, element, fromIndex) {
    for (var i = fromIndex; i < array.length; i++) {
        if (array[i] === element) {
            return(i)
        }
    }
    if (i === array.length) {
        return -1
    }
    if (i > array.length) {
        return -1
    }
}
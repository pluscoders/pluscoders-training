// slice.js

function slice(array, start, end) {
    var result = []
    for (var i = start; i < end; i++) {
        result[result.length] = array[i]
        if(end > array.length) {
            end = array.length
        }
    }
return result
}
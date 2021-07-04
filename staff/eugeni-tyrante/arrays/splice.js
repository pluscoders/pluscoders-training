// splice.js

function splice(start, deleteCount, element) {
    var removed = []
    var count = array.length
    for (var i = start; i < array.length + 1; i++) {
        if (deleteCount > 0 && i === start) {
            removed[removed.length] = array[i]
            array[i] = element
        }            
        if (deleteCount > 0 && i > start && i < array.length && removed.length < deleteCount) {
            removed[removed.length] = array[i]
            array[i] = array[i + deleteCount - 1]
        }
        if (deleteCount > 0 && i === array.length) {
            array.length = array.length - deleteCount + 1
        }
        if (deleteCount < 1 && i === start) {
            removed[removed.length] = array[i]
        }
        if (deleteCount < 1 && i > start && count > start) {
            array[count] = array[count - 1]
            count--
        }
        if (deleteCount < 1 && i > start && count === start) {
            array[start] = element
        }
    }
return removed
}
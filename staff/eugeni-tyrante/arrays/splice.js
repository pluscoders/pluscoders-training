// splice.js

var array = ['Jan', 'Feb', 'March', 'April', 'June', 'July']
var removed = []
var count = array.length

function splice(start, deleteCount, element) {
    for (var i = start; i < array.length + 1; i++) {
        if (deleteCount > 0 && i === start) {
            removed[removed.length] = array[i]
            array[i] = element
        }            
        if (deleteCount > 0 && i > start && i < array.length) {
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
return array
}

splice(1, 2, 'monthRandom')
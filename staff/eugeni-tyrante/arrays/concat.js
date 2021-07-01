// concat.js

var count = 0
var result = []

function concat(array1, array2, array3) {
    for(var i = 0; i < array1.length + array2.length + array3.length; i++) {
        if(array1.length > i) {
            result[result.length] = array1[count]
            count++
        }
        if(array1.length === i) {
            count = 0
            result[result.length] = array2[count]
            count++
        }
        if(i > array1.length && i < array1.length + array2.length) {
            result[result.length] = array2[count]
            count++
        }
        if(i === array1.length + array2.length) {
            count = 0
            result[result.length] = array3[count]
            count++
        }
        if(i > array2.length + array1.length) {
            result[result.length] = array3[count]
            count++
        }
    }
return result
}
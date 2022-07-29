/*
*/



function every(array, callback) {
    var final = []
    for (var i = 0; i < array.length; i++) {
        var result = callback(array[i])

        if (result === false) {
            return false
        } else { final[i] = array[i] }
    }
    if (final.length === array.length)
    return true
}
//tests

//case 1
var array1 = [1, 30, 39, 29, 10, 13]
result = every(array1, (currentValue) => currentValue < 40)
console.log(result)
//true

//case 2
var array1 = [1, 30, 39, 29, 10, 13]
result = every(array1, (currentValue) => currentValue === 13)
console.log(result)
//false

//case 3
var array1 = [13, 13]
result = every(array1, (currentValue) => currentValue === 13)
console.log(result)
//true

//case 4
var array1 = [1, 30, 39, 29, 10, 13]
result = every(array1, (currentValue) => currentValue > 38)
console.log(result)
//false
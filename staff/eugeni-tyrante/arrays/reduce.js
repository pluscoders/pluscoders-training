// reduce.js

var array1 = [1, 2, 3, 4]
    
function reduce(array, callback, currentValue, accumulator) {
    var total = 0
    var accumulator = array[0]
    for(var i = 1; i < array.length; i++) {
        var currentValue = callback(array, i, accumulator, currentValue)
        accumulator=currentValue
    }
return accumulator
}

reduce(array1, function callback (array, i, accumulator, currentValue) {
    return accumulator - array[i]
})
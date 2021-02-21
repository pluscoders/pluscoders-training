function reduce(array, callback, accumulator) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (!(callback instanceof Function)) throw new TypeError(callback + ' is not an function')

    var result

    if (array.length === 0) {
        if (typeof accumulator === 'undefined') throw new TypeError('Reduce of empty array with no initial value')
    } else if (array.length === 1) {
        if (typeof accumulator === 'undefined') result = array[0]
    } else {
        var i = 0
        if (typeof accumulator === 'undefined') {
            accumulator = array[0]
            result = array[0]
            i = 1
        }
        for (i; i < array.length; i++) {
            if (i !== 0) accumulator = result
            result = callback(accumulator, array[i], i, array)
        }
    }

    return result
}


var array = [1, 2, 3, 4]
var callback = function(accumulator, currentValue) {
    return accumulator + currentValue;
} 

var a = reduce(array, callback)
var b = reduce(array, callback, 5)
var c = reduce(array, callback, 10)
console.log('a: ', a, '  === 10?')
console.log('b: ', b, '  === 15?')
console.log('c: ', c, '  === 20?')

// --------------------------------------------------------------------

var array = [0, 1, 2, 3]
var callback = function(a, b){ return a + b; }

var d = reduce(array, callback)
console.log('d: ', d, '  === 6?')

// --------------------------------------------------------------------

var array = [[0,1], [2,3], [4,5]]
var callback = function(a,b) { return a.concat(b); }

var e = reduce(array, callback)
console.log('e: ', e, '  === [0, 1, 2, 3, 4, 5]?')
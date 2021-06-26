// concat.demo.js

// 1

var array1 = ['a', 'b', 'c']
var array2 = ['d', 'e', 'f', 'e', 'g', 'h']
var array3 = [4]
var array4 = [5, 6, 7, 'hola mundo']
var final = []

concat(array1, final)
concat(array2, final)
console.log(final)

// 2

concat(array3, final)
concat(array4, final)
console.log(final)

// 3

concat(array1, final)
concat(array2, final)
concat(array3, final)
concat(array4, final)
console.log(final)
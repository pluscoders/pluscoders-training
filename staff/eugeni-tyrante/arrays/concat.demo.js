// concat.demo.js

// 1

var array1 = ['a', 'b', 'c']
var array2 = ['d', 'e', 'f', 'e', 'g', 'h']
var array3 = [4]
var array4 = [5, 6, 7, 'hola mundo']
var result = []

concat(array1, result)
concat(array2, result)
console.log(result)

// 2

concat(array3, result)
concat(array4, result)
console.log(result)

// 3

concat(array1, result)
concat(array2, result)
concat(array3, result)
concat(array4, result)
console.log(result)
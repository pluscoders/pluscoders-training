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
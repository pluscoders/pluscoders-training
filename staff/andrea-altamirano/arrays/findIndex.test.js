//tests
//case 1

var numbers = [2, 12, 8, 156, 1052, 180, 265, 459]
var found = findIndex(numbers, (element) => element > 135)
console.log (found)
//result = 156 i=3

//case 2
var numbers = [2, 12, 8, 156, 180, 265, 459, 1052]
var found = findIndex(numbers, (element) => element > 1000)
console.log (found)
//result = 7

//case 3
var numbers = [2, 12, 8, 156, 180, 265, 459, 1052]
var found = findIndex(numbers, (element) => element === 150)
console.log (found)
//result = -1

//case 4
var animals = ['dogs', 'cats','elephant', 'whale', 'cocodriles','snakes','alligator']
var found = findIndex(animals, (element) => element === 'snakes')
console.log (found)
//result 5
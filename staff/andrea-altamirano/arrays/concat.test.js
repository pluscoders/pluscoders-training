// tests

// case 1

const mammals = ['dogs', 'cats', 'elephant', 'whale']
const reptiles = ['cocodriles', 'snakes', 'alligator']

console.log(concat(mammals, reptiles))
     //animals = ['dogs', 'cats','elephant', 'whale', 'cocodriles','snakes','alligator']

// case 2

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']
const array3 = concat(array1, array2)

console.log(array3)
// expected output: Array ["a", "b", "c", "d", "e", "f"]

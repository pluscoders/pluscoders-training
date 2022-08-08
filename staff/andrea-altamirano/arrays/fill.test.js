var array1 = [1, 2, 3, 4];

console.log(fill(array1, 0, 2));
// expected output: [1, 2, 0, 0]
var array1 = [1, 2, 3, 4];

console.log(fill(array1, 5, 1));
// expected output: [1, 5, 5, 5]
var array1 = [1, 2, 3, 4];

console.log(fill(array1, 6, 0));
// expected output: [6, 6, 6, 6]

var array1 = [1, 2, 3, 4, 5, 6, 7];
console.log(fill(array1, 0, 2, 4));
// expected output: [1, 2, 0, 0]

var array1 = [1, 2, 3, 4, 5, 6, 7];
console.log(fill(array1, 6));
// expected output: [6,6,6,6,6,6,6]

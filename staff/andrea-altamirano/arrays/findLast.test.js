//test1
var array1 = [5, 12, 50, 130, 44];
console.log(findLast(array1, (element) => element > 45));
// expected output: 130

//test2
var array1 = [5, 12, 50, 130, 44];
console.log(findLast(array1, (element) => element < 130));
//44

//test3
var array1 = [5, 12, 50, 130, 44];
console.log(findLast(array1, (element) => element > 150));
// undefined

//test4
var array1 = [5, 12, 50, 130, 44];
console.log(findLast(array1, (element) => element < 10));
//5

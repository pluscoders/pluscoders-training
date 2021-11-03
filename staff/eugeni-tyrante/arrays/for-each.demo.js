// for-each.demo.js

// 1

var a = [1, 2, 3, 4, 5]

a.forEach(function callbackFn(element, index, array){
   console.log(element, index, array)
})

//1 0 (5) [1, 2, 3, 4, 5]
//2 1 (5) [1, 2, 3, 4, 5]
//3 2 (5) [1, 2, 3, 4, 5]
//4 3 (5) [1, 2, 3, 4, 5]
//5 4 (5) [1, 2, 3, 4, 5]

forEach(a, function callback(element, index, array) {
   console.log(element, index, array)
}) 

//1 0 (5) [1, 2, 3, 4, 5]
//2 1 (5) [1, 2, 3, 4, 5]
//3 2 (5) [1, 2, 3, 4, 5]
//4 3 (5) [1, 2, 3, 4, 5]
//5 4 (5) [1, 2, 3, 4, 5]

// 2

var a = ['a', 'b', 'c']

a.forEach(function callbackFn(element, index, array){
   console.log(element, index, array)
})

//a 0 (3) ["a", "b", "c"]
//b 1 (3) ["a", "b", "c"]
//c 2 (3) ["a", "b", "c"]


forEach(a, function callback(element, index, array) {
   console.log(element, index, array)
})

//a 0 (3) ["a", "b", "c"]
//b 1 (3) ["a", "b", "c"]
//c 2 (3) ["a", "b", "c"]
// map.demo.js

// 1

var array1 = [1, 5, 10, 20]

map(array1, function(element, index, array) {
    console.log(element, index, array)
})
//VM8322:14 6 0 (4) [1, 5, 10, 20]
//VM8322:14 6 1 (4) [1, 5, 10, 20]
//VM8322:14 6 2 (4) [1, 5, 10, 20]
//VM8322:14 6 3 (4) [1, 5, 10, 20]
(4) [6, 30, 60, 120]
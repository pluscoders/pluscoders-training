// find.demo.js

// 1

var a = [1, 2, 3]

find(a, function(element, index, array) {
    console.log(element, index, array)

    return element > 2
})
//VM8097:12 1 0 (3) [1, 2, 3]
//VM8097:12 2 1 (3) [1, 2, 3]
//VM8097:12 3 2 (3) [1, 2, 3]
//3
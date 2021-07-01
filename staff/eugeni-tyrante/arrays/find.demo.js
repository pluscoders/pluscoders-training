// find.demo.js

var array1 = [1, 5, 15, 35, 90, 275]

find(a, function(element, index, array) {
    console.log(element, index, array)

    return element > 1.5
})
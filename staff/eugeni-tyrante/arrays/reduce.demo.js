// reduce.demo.js

// 1

var array1 = [2, 8575.34, 342, 324234]

var reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));
333153.34

//

reduce(array1, function callback (array, i, accumulator, currentValue) {
    return accumulator + array[i]
})
333153.34

// 2

var array1 = [2, 8575.34, 342, 324234]

var reducer = (accumulator, currentValue) => accumulator - currentValue;

console.log(array1.reduce(reducer));
-333149.34

//

reduce(array1, function callback (array, i, accumulator, currentValue) {
    return accumulator - array[i]
})
-333149.34

// 3

var array1 = [5, 4]

var reducer = (accumulator, currentValue) => accumulator * currentValue;

console.log(array1.reduce(reducer));
20

//

var array1 = [5, 4]

reduce(array1, function callback (array, i, accumulator, currentValue) {
    return accumulator * array[i]
})
20

// 4

var array1 = [5, 4]

var reducer = (accumulator, currentValue) => accumulator / currentValue;

console.log(array1.reduce(reducer));
1.25

//

var array1 = [5, 4]

reduce(array1, function callback (array, i, accumulator, currentValue) {
    return accumulator / array[i]
})
1.25

// 5

var array1 = [2, 8575.34, 342, 324234]

var reducer = (accumulator, currentValue) => accumulator * currentValue;

console.log(array1.reduce(reducer));
1901805084059.0403

//

reduce(array1, function callback (array, i, accumulator, currentValue) {
    return accumulator * array[i]
})
1901805084059.0403
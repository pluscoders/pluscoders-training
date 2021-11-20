// splice.demo.js

var array = ['Jan', 'Feb', 'March', 'April', 'June', 'July']

// 1

splice(4, 3, 'monthRandom')
(2) ["June", "July"]

// 2

splice(4, 4, 'monthRandom')
(2) ["June", "July"]

// 3

splice(0, 6, 'monthRandom')
(6) ["Jan", "Feb", "March", "April", "June", "July"]

// 4

splice(1, 0, 'monthRandom')
['']

// 5

splice(2, 3, 'monthRandom')
(3) ["March", "monthRandom", "April"]
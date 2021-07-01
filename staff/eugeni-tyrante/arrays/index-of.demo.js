// indexOf.demo.js

// indexOf without fromIndex

// 1

var beasts = ['ant', 'bison', 'camel', 'duck', 'seal']

indexOf(beasts, 'bison')
1

// 2

var beasts = ['ant', 'bison', 'camel', 'duck', 'seal']

indexOf(beasts, 'dino')
-1

// indexOf with fromIndex

// 1

var beasts = ['ant', 'bison', 'camel', 'duck', 'seal']

indexOf(beasts, 'bison', 1)
1

// 2

var beasts = ['ant', 'bison', 'camel', 'duck', 'seal']

indexOf(beasts, 'bison', 3)
-1

// 3

var beasts = ['ant', 'bison', 'camel', 'duck', 'seal']

indexOf(beasts, 'dino', 1)
-1

// 4

var beasts = ['ant', 'bison', 'camel', 'duck', 'seal']

indexOf(beasts, 'dino', 7)
-1
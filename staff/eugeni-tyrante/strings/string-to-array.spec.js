console.log('SPEC stringToArray')

// 1

var spec = 'for text "hello" it should return array ["h", "e", "l", "l", "o"]'

debugger
var array = stringToArray('hello')

console.assert(array.length === 5 && array[0] === 'h' && array[1] === 'e' && array[2] === 'l' && array[3] === 'l' && array[4] === 'o', spec)
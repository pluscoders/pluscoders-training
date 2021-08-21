describe('indexOf()')

// 1

var spec = 'should find "bison" into the array ["ant", "bison", "camel", "duck", "bison"] returning index 5'

var arr = ['ant', 'bison', 'camel', 'duck', 'bison']

var index = indexOf(arr, 'bison')

assert(index === 1, spec)
// TODO assert data has not changed inside the array

// 2

var spec = 'should find ("camel") into the array ["ant", "bison", "camel", "duck", "bison"] returning index 2'


var arr = ['ant', 'bison', 'camel', 'duck', 'bison']
var searchElement = ['camel']
var fromIndex = 0

var index = indexOf(arr,searchElement,fromIndex)

assert(index[0] === 2, spec)

// 3

var spec = 'should find ("camel") into the array ["ant", "bison", "camel", "duck", "bison"] returning index 2'


var arr = ['ant', 'bison', 'camel', 'duck', 'bison']
var searchElement = ['camel']
var fromIndex = 2

var index = indexOf(arr,searchElement,fromIndex)

assert(index[0] === 2, spec)

// 4

var spec = 'should find ("camel") into the array ["ant", "bison", "camel", "duck", "bison"] returning index 2'


var arr = ['ant', 'bison', 'camel', 'duck', 'bison']
var searchElement = ['radio']
var fromIndex = 0

var index = indexOf(arr,searchElement,fromIndex)

assert(index[0] === undefined, spec)


describe('indexof()')

// 1

var spec = 'should find ("bison") into the array ["ant", "bison", "camel", "duck", "bison"] returning index 5'


var arr = ['ant', 'bison', 'camel', 'duck', 'bison']
var searchElement = ['bison']
var fromIndex = 3

var indexOfElement = indexof(arr,searchElement,fromIndex)

assert(indexOfElement[0] === 4, spec)

// 2

var spec = 'should find ("camel") into the array ["ant", "bison", "camel", "duck", "bison"] returning index 2'


var arr = ['ant', 'bison', 'camel', 'duck', 'bison']
var searchElement = ['camel']
var fromIndex = 0

var indexOfElement = indexof(arr,searchElement,fromIndex)

assert(indexOfElement[0] === 2, spec)

// 3

var spec = 'should find ("camel") into the array ["ant", "bison", "camel", "duck", "bison"] returning index 2'


var arr = ['ant', 'bison', 'camel', 'duck', 'bison']
var searchElement = ['camel']
var fromIndex = 2

var indexOfElement = indexof(arr,searchElement,fromIndex)

assert(indexOfElement[0] === 2, spec)

// 4

var spec = 'should find ("camel") into the array ["ant", "bison", "camel", "duck", "bison"] returning index 2'


var arr = ['ant', 'bison', 'camel', 'duck', 'bison']
var searchElement = ['radio']
var fromIndex = 0

var indexOfElement = indexof(arr,searchElement,fromIndex)

assert(indexOfElement[0] === undefined, spec)


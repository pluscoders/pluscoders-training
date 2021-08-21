describe('indexOf()')

// 1

var spec = 'should find ("bison") into the array ["ant", "bison", "camel", "duck", "bison"] returning index 2'

var arr = ['ant', 'bison', 'camel', 'duck', 'bison']
var searchElement = ['camel']

var indexOfElement = indexof(arr,searchElement)

assert(indexOfElement[0] === 2, spec)
describe('indexOf()')

// 1

var spec = 'should find "bison" into the array ["ant", "bison", "camel", "duck", "bison"] returning index 5'

var arr = ['ant', 'bison', 'camel', 'duck', 'bison']

var index = indexOf(arr, 'bison')

assert(index === 1, spec)
assert(arr[0] === 'ant', spec)
assert(arr[1] === 'bison', spec)
assert(arr[2] === 'camel', spec)
assert(arr[3] === 'duck', spec)
assert(arr[4] === 'bison', spec)

// 2

var spec = 'should find "camel" into the array ["ant", "bison", "camel", "duck", "bison"] returning index 2'

var arr = ['ant', 'bison', 'camel', 'duck', 'bison']

var index = indexOf(arr, 'camel', 0)

assert(index === 2, spec)
assert(arr[0] === 'ant', spec)
assert(arr[1] === 'bison', spec)
assert(arr[2] === 'camel', spec)
assert(arr[3] === 'duck', spec)
assert(arr[4] === 'bison', spec)

// 3

var spec = 'should find "camel" into the array ["ant", "bison", "camel", "duck", "bison"] returning index 2'

var arr = ['ant', 'bison', 'camel', 'duck', 'bison']

var index = indexOf(arr, 'camel', 2)

assert(index === 2, spec)
assert(arr[0] === 'ant', spec)
assert(arr[1] === 'bison', spec)
assert(arr[2] === 'camel', spec)
assert(arr[3] === 'duck', spec)
assert(arr[4] === 'bison', spec)

// 4

var spec = 'should find "camel" into the array ["ant", "bison", "camel", "duck", "bison"] returning index 2'

var arr = ['ant', 'bison', 'camel', 'duck', 'bison']

var index = indexOf(arr, 'radio', 0)

assert(index === -1, spec)
assert(arr[0] === 'ant', spec)
assert(arr[1] === 'bison', spec)
assert(arr[2] === 'camel', spec)
assert(arr[3] === 'duck', spec)
assert(arr[4] === 'bison', spec)


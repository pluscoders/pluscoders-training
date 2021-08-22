describe('pop()')

// 1

var spec = 'should iterate on ["onion", "carrot", "vegetable"] and remove and return  ["vegetable"]'

var arr = ['onion', 'carrot', 'vegetable']

var last = pop(arr)

assert(last === 'vegetable', spec)
assert(arr.length === 2, spec)
assert(arr[0] === 'onion', spec)
assert(arr[1] === 'carrot', spec)

// 2

var spec = 'should iterate on ["trail", 1, "bit "] and remove and return  ["bit "]'

var arr = ['trail', 1 , 'bit']

var last = pop(arr)

assert(last === 'bit', spec)
assert(arr.length === 2, spec)
assert(arr[0] === 'trail', spec)
assert(arr[1] === 1, spec)

// 3

var spec = 'should iterate on [22 , "binance"] and remove and return ["binance"]'

var arr = [22, 'binance']

var last = pop(arr)

assert(last === 'binance', spec)
assert(arr.length === 1, spec)
assert(arr[0] === 22, spec)

// 4

var spec = 'should iterate on ["space", "script", "performance"] and remove and return  ["bit "]'

var arr = ['space', 'script', 'performance']

var last = pop(arr)

assert(last === 'performance', spec)
assert(arr.length === 2, spec)
assert(arr[0] === 'space', spec)
assert(arr[1] === 'script', spec)

describe('pop()')

// 1

var spec = 'should iterate on ["onion", "carrot", "vegetable"] and remove and return  ["vegetable"]'

var arr = ['onion', 'carrot', 'vegetable']

var last = pop(arr)

assert(last === 'vegetable', spec)
assert(arr.length === 2, spec)
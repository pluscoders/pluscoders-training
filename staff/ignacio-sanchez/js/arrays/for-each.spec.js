describe('forEach()')

// 1

var spec = 'should iterate on [1, 2, 3] resulting in [1, 2, 3]'

var arr = [1, 2, 3]
var res = []

forEach(arr, function(value) {
    res[res.length] = value
})

assert(res[0] === 1 && res[1] === 2 && res[2] === 3, spec)
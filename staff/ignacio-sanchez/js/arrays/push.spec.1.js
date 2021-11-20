describe('push()')

// 1

var spec = 'should add ("trivial" , "basic") into the array ["beans","bonus","apple"] resulting in length 5'

var arr = ['beans', 'bonus', 'apple']

var length = push(arr, 'trivial', 'basic')

assert(length === 5, spec)
assert(arr[0] === 'beans', spec)
assert(arr[1] === 'bonus', spec)
assert(arr[2] === 'apple', spec)
assert(arr[3] === 'trivial', spec)
assert(arr[4] === 'basic', spec)


// 2

var spec = 'should add ("siberet", 1) into the array ["beans","bonus","apple"] resulting in length 5'

var arr = ['beans', 'bonus', 'apple']

var length = push(arr,'siberet' , 1)

assert(length === 5, spec)
assert(arr[0] === 'beans')
assert(arr[1] === 'bonus')
assert(arr[2] === 'apple')
assert(arr[3] === 'siberet')
assert(arr[4] === 1)

// 3

var spec = 'should add [33, 44, "real food"] into the array ["beans","bonus","apple"] resulting in length 6'

var arr = ['beans', 'bonus', 'apple']

var length = push(arr,33, 44, 'real food')

assert(length === 6, spec)
assert(arr[0] === 'beans')
assert(arr[1] === 'bonus')
assert(arr[2] === 'apple')
assert(arr[3] === 33)
assert(arr[4] === 44)
assert(arr[5] === 'real food')

// 4

var spec = 'should add [" real food "] into the array ["apple"] resulting in length 2'


var arr = ['apple']
var addElement = [" real food "]

var length = push(arr," real food ")

assert(length === 2, spec)
assert(arr[0]=== 'apple')
assert(arr[1]=== ' real food ')


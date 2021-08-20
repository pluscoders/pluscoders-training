describe('push()')

// 1

var spec = 'should add ("trivial" , "basic") into the array ["beans","bonus","apple"] resulting in length 5'


var arr = ['beans', 'bonus', 'apple']
var addElement = ['trivial','basic']

var lengthArray = push(arr)

assert(lengthArray === 5, spec)

// 2

var spec = 'should add ["siberet", 1] into the array ["beans","bonus","apple"] resulting in length 5'


var arr = ['beans', 'bonus', 'apple']
var addElement = ['siberet' , '1']

var lengthArray = push(arr)

assert(lengthArray === 5, spec)

// 3

var spec = 'should add [33, 44, "real food"] into the array ["beans","bonus","apple"] resulting in length 6'


var arr = ['beans', 'bonus', 'apple']
var addElement = ['33', '44', 'real food']

var lengthArray = push(arr)

assert(lengthArray === 6, spec)

// 4

var spec = 'should add [" real food "] into the array ["apple"] resulting in length 2'


var arr = ['apple']
var addElement = [" real food "]

var lengthArray = push(arr)

assert(lengthArray === 2, spec)


describe('String.prototype.reverse()')
// 1

var spec = 'should reverse "dog" into "god" '

var s = 'dog'

var result = s.reverse()

assert(result === 'god', spec)

// 2

var spec = 'should reverse "Hello, World!" into "!dlroW ,olleH" '

var s = 'Hello, World!'

var result = s.reverse()

assert(result === '!dlroW ,olleH', spec)

// 3

var spec = 'should reverse "0123456789" into "9876543210" '

var s = '0123456789'

var result = s.reverse()

assert(result === '9876543210', spec)

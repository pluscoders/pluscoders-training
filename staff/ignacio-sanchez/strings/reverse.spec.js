describe('reverse()')
// 1

var spec = 'should reverse "dog" into "god" '

var result = reverse('dog')

assert(result === 'god', spec)

// 2

var spec = 'should reverse "Hello, World!" into "!dlroW ,olleH" '

var result = reverse('Hello, World!')

assert(result === '!dlroW ,olleH', spec)

// 3

var spec = 'should reverse "0123456789" into "9876543210" '

var result = reverse('0123456789')

assert(result === '9876543210', spec)

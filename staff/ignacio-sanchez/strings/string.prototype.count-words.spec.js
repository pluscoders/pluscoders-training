describe('String.prototype.countWords()')

// 1

var spec = 'should return 3 for string "hello nice world"'

var res = "hello nice world".countWords()

assert(res === 3, spec)

// 2

var spec = 'should return 5 for string "a b c d e"'

var s = "a b c d e"

var res = s.countWords()

assert(res === 5, spec)
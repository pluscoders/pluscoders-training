describe('String.prototype.countWords()')

// 1

var spec = 'should return 3 for string "hello nice world"'

var s = "hello nice world"

var res = s.countWords()

assert(res === 3, spec)

// 2

var spec = 'should return 5 for string "a b c d e"'

var s = "a b c d e"

var res = s.countWords()

assert(res === 5, spec)

// 3

var spec = 'should return 2 for string " the movie  "'

var s = " the movie  "

var res = s.countWords()

assert(res === 2, spec)
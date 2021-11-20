describe('countWords()')
// 1

var spec = 'should count the numbers of words in "Hello World" '

var count = countWords('Hello World')

assert (count === 2, spec)

// 2

var spec = 'should count the numbers of words in "I was born from an egg" '

var count = countWords('I was born from an egg')

assert (count === 6, spec)

// 3

var spec = 'should count the numbers of words in " " '

var count = countWords(' ')

assert (count === 0, spec)

// 4

var spec = 'should count the numbers of words in "\\t\\nhol\\n \\n     \\t \\n\\n \\t a\\n \\ta \\n  \\ta\\n   \\t" '

var count = countWords('\t\nhol\n \n     \t \n\n \t a\n \ta \n  \ta\n   \t')

assert (count === 4, spec)


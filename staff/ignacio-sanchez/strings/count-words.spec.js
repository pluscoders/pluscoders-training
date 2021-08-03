describe('countWords()')
// 1

var spec = 'should count the numbers of words in "Hello World" '

var count = countWords('Hello World')

if (count === 2)
    console.log(spec)
else
    console.error(spec)
// 2

var spec = 'should count the numbers of words in "I was born from an egg" '

var count = countWords('I was born from an egg')

if (count === 6)
    console.log(spec)
else
    console.error(spec)
// 3

var spec = 'should count the numbers of words in " " '

var count = countWords(' ')

if (count === 0)
    console.log(spec)
else
    console.error(spec)
// 4

var spec = 'should count the numbers of words in "\\t\\nhol\\n \\n     \\t \\n\\n \\t a\\n \\ta \\n  \\ta\\n   \\t" '

var count = countWords('\t\nhol\n \n     \t \n\n \t a\n \ta \n  \ta\n   \t')

if (count === 4)
    console.log(spec)
else
    console.error(spec)

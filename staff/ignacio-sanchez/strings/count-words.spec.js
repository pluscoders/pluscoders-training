// 1

var spec = 'should count the numbers of words in "Hello World" '

var count = count('Hello World')

if (count === 2)
    console.log(spec)
else
    console.error(spec)
// 2

var spec = 'should count the numbers of words in "I was born from an egg" '

var count = count('I was born from an egg')

if (count === 6)
    console.log(spec)
else
    console.error(spec)
// 3

var spec = 'should count the numbers of words in " " '

var count = count(' ')

if (count === 0)
    console.log(spec)
else
    console.error(spec)

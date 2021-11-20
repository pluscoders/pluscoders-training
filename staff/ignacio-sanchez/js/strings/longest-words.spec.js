describe('longestWords()')

// 1

var spec = 'should find the longest words ["mundo", "hello", "world", "mundo"] in "\\tmundo hello hi bud bad\\n \\ngood \\tworld\\n\\t hola mundo" '

var result = longestWords('\tmundo hello hi bud bad\n \ngood \tworld\n\t hola mundo')

assert (result.length === 4 && result[0] === 'mundo' && result[1] === 'hello' && result[2] === 'world' && result[3] === 'mundo',spec)


// 2

var spec = 'should find the longest words ["you?"] in "How old are you?" '

var result = longestWords('How old are you?')

assert (result.length === 1 && result[0] === 'you?',spec)


// 3

var spec = 'should find the longest words ["belive"] in "I belive i can fly" '

var result = longestWords('I belive i can fly')

assert (result.length === 1 && result[0] === 'belive',spec)

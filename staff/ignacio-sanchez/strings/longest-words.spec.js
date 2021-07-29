describe('longestWords()')

// 1

var spec = 'should find the longest words ["mundo", "hello", "world", "mundo"] in "\\tmundo hello hi bud bad\\n \\ngood \\tworld\\n\\t hola mundo" '

var result = longestWords('\tmundo hello hi bud bad\n \ngood \tworld\n\t hola mundo')

if (result.length === 4 && result[0] === 'mundo' && result[1] === 'hello' && result[2] === 'world' && result[3] === 'mundo')
    console.log(spec)
else
    console.error(spec)

// 2

var spec = 'should find the longest words ["you?"] in "How old are you?" '

var result = longestWords('How old are you?')

if (result.length === 1 && result[0] === 'you?')
    console.log(spec)
else
    console.error(spec)
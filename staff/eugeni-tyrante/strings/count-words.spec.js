console.log('SPEC countWords')

// 1

var spec = 'for text "hello world" it should return 2'

var numOfWords = countWords('hello world')

console.assert(numOfWords === 2, spec)

// 2

var spec = 'for text "" it should return 0'

var numOfWords = countWords('')

console.assert(numOfWords === 0, spec)

// 3

var spec = 'for text "hello?" it should return 1'

var numOfWords = countWords ('hello?')

console.assert(numOfWords === 1, spec)
// 4

var spec = 'for text "I saw the light a few days later 🐣" it should return 9'

var numOfWords = countWords('I saw the light a few days later 🐣')

console.assert(numOfWords === 9, spec)

// 5

var spec = 'for text "... hey oh, lets go" it should return 4'

var numOfWords = countWords('... hey oh, lets go')

console.assert(numOfWords === 4, spec)

// 6

var spec = 'for text ". . .  h oh , let s go" it should return 5'

var numOfWords = countWords('. . .  h oh , let s go')

console.assert(numOfWords === 5, spec)
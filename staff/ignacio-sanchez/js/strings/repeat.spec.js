describe('repeat()')

// 1

var spec = 'should repeat the string 2 times'

var result = repeat("Hello!", 2)

assert (result === "Hello!Hello!",spec)


// 2

var spec = 'should repeat the string 4 times'

var result = repeat("a", 4)

assert (result === "aaaa",spec)


// 3

var spec = 'should repeat the string 10 times'

var result = repeat("ball", 10)

assert (result === "ballballballballballballballballballball",spec)

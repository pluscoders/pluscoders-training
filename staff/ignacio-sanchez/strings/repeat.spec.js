console.log('SPEC repeat()')

// 1

var spec = 'should repeat the string 2 times'

var result = repeat("Hello!", 2)

if (result === "Hello!Hello!")
    console.log(spec)
else
    console.error(spec)

// 2

var spec = 'should repeat the string 4 times'

var result = repeat("a", 4)

if (result === "aaaa")
    console.log(spec)
else
    console.error(spec)
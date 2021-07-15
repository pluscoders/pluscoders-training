// 1

var spec = 'should split "Hello World" into ["Hello", "World"]'

var result = split('Hello World', ' ')

if (result[0] === 'Hello' && result[1] === 'World')
    console.log(spec)
else
    console.error(spec)

// 2

// TODO more test cases
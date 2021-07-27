// 1

var spec = 'should split "Hello World" into ["Hello", "World"]'

var result = split('Hello World', ' ')

if (result[0] === 'Hello' && result[1] === 'World')
    console.log(spec)
else
    console.error(spec)
// 2

var spec = 'should split "hola mundo" into ["h","la mund"," "]'

var result = split('hola mundo', 'o')

if (result[0] === 'h' && result[1] === 'la mund'&& result[2] === '')
    console.log(spec)
else
    console.error(spec)
// 1

var spec = 'should split "Hello World" into ["Hello", "World"]'

var result = split('Hello World', ' ')

if (result[0] === 'Hello' && result[1] === 'World')
    console.log(spec)
else
    console.error(spec)




describe('split()')
// 1

var spec = 'should split "Hello World" into ["Hello", "World"]'

var result = split('Hello World', ' ')

assert (result[0] === 'Hello' && result[1] === 'World',spec)

// 2

var spec = 'should split "hola mundo" into ["h","la mund"," "]'

var result = split('hola mundo', 'o')

assert (result[0] === 'h' && result[1] === 'la mund'&& result[2] === '',spec)

// 3

var spec = 'should split "hola mundo" into ["hol", " mundo"]'

var result = split('hola mundo', 'a')

assert (result[0] === 'hol' && result[1] === ' mundo',spec)





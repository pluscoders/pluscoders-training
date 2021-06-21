console.log('SPEC search')

// 1

var spec = 'text "Hello, World!" and pattern "World" should return 7'

var found = search("Hello, World!", "World")

console.assert(found === 7, spec)

// 2

var spec = 'text "Hello, World!" and pattern "Hola" should return -1'

var found = search("Hello, World!", "Hola")

console.assert(found === -1, spec)

// 3

var spec = 'text "123🅰️🅱️" and pattern "🅰️" should return 3'

var found = search("123🅰️🅱️", "🅰️")

console.assert(found === 3, spec)
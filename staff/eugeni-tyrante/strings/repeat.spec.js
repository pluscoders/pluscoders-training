console.log('SPEC repeat')

// 1

var spec = 'for text "", 10 it should return "" '

var repeated = repeat("", 10)

console.assert(repeated === "", spec)

// 2

var spec = 'for text "👋", 3 it should return "👋👋👋" '

var repeated = repeat("👋", 3)

console.assert(repeated === "👋👋👋", spec)

// 3

var spec = 'for text "Hello!", 2 it should return "Hello!Hello!" '

var repeated = repeat("Hello!", 2)

console.assert(repeated === "Hello!Hello!", spec)

// 4

var spec = 'for text "make me disappear" it should return "" '

var repeated = repeat("make me disappear")

console.assert(repeated === "", spec)
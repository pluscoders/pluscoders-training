console.log('SPEC concat')

// 1

var spec = 'for text "👋", "😊", "🤙" it should return "👋😊🤙" '

var conc = concat("👋", "😊", "🤙")

console.assert(conc === "👋😊🤙", spec)

// 2

var spec = 'for text "Hello", ",", " ", "World", "!" it should return "Hello, World!" '

var conc = concat("Hello", ",", " ", "World", "!")

console.assert(conc === "Hello, World!", spec)

// 3

var spec = 'for text 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 it should return "012345678910" '

var conc = concat(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

console.assert(conc === "012345678910", spec)

// 4

var spec = 'for text "","" it should return "" '

var conc = concat("","")

console.assert(conc === "", spec)
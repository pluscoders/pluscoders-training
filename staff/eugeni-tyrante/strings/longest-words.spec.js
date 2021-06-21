console.log('SPEC longestWords')

// 1

var spec = 'text "" should return []'

var finalArray = longestWords("")

console.assert(finalArray[0] === "", spec)

// 2

var spec = 'text "👋" should return ["👋"]'

var finalArray = longestWords("👋")

console.assert(finalArray[0] === "👋", spec)

// 3

var spec = 'text ". . . hello, world !" should return ["hello", "world"]'

var finalArray = longestWords(". . . hello, world !")

console.assert(finalArray[0] === "hello" && finalArray[1] === "world", spec)

// 4

var spec = 'text "zero, one, two, three, four, five, six, seven, eight, nine, ten, ..." should return ["three", "seven", "eight"]'

var finalArray = longestWords("zero, one, two, three, four, five, six, seven, eight, nine, ten, ...")

console.assert(finalArray[0] === "three" && finalArray[1] === "seven" && finalArray[2] === "eight", spec)
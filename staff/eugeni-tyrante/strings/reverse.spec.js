console.log('SPEC reverse')

// 1

var spec = 'for text "" it should return "" '

var rev = reverse("")

console.assert(rev === "", spec)

// 2

var spec = 'for text "dog" it should return "god" '

var rev = reverse("dog")

console.assert(rev === "god", spec)

// 3

var spec = 'for text "Hello, World!" it should return "!dlroW ,olleH"'

var rev = reverse("Hello, World!")

console.assert(rev ===  "!dlroW ,olleH", spec)

// 4

debugger
var spec = 'for text 01234567 it should return ""'

var rev = reverse(01234567)

console.assert(rev === "", spec)
function search(text, pattern) {
    {
    var indexFounded = text.search(pattern);
}
return indexFounded ;}

search("Hello,World!", "World");

// 1

var spec = 'should extract index from text'

var result = search("Hello,World!", "World")

if (result === 6)
    console.log(spec)
else
    console.error(spec)

// 2

var spec = 'should extract index from text'

var result = search("abcABC", /ABC/)

if (result === 3)
    console.log(spec)
else
    console.error(spec)
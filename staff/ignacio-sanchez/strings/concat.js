function concat() {
    var concatenated = "";
    for (var i = 0; i < arguments.length; i++) {
        concatenated += arguments[i]
    }
    return concatenated
}

concat(1, 2, 3, 4);

console.log('SPEC concat')

// 1

var spec = 'should conact 1,2,3,4 into "1234"'

var result = concat(1, 2, 3, 4)

if (result === "1234")
    console.log(spec)
else
    console.error(spec)

// 2

var spec = 'should conact "no", "much", "to", "concat", "here" into "nomuchtoconcathere"'

var result = concat("no", "much", "to", "concat", "here")

if (result === "nomuchtoconcathere")
    console.log(spec)
else
    console.error(spec)
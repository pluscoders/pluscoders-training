console.log('TEST concat')


/**
 * Test of concat function
 *
 * @function concat
 * @variation 1 - Concat two or more arrays into new array
 * @param {array} [args] - Arraya to concat - | Random |
 * @yields {array} [result] - The array with all elements
 */

console.log(' - CASE Concat two or more arrays into new array')

var args = []
var copy = []
args.length = Math.floor(Math.random() * 100) + 2

for (var i = 0; i < args.length; i++) {
    var argsElement = new Array
    argsElement.length = Math.floor(Math.random() * 100)

    for (var j = 0; j < argsElement.length; j++) {
        argsElement[j] = Math.floor(Math.random() * 100)
    }

    args[i] = argsElement
    copy[i] = args[i]
}

// APPLY

var result = concat.apply(this, args)

// CHECK

// Result is an array
assert(result instanceof Array, 'result must be an array')
// Result.length
var lengthTotal = 0
for (var i = 0; i < args.length; i++)
    lengthTotal += args[i].length
assert(result.length === lengthTotal, 'result.length is wrong')
// Each element in result is in the arrays
for (var i = 0; i < result.lenth; i++) {
    for (var j = 0; j < args.length; j++) {
        for (var m = 0; m < args[j].length; m++)
            assert(result[i] === args[j][m], 'result is wrong')
    }
}
// Arhs was not changed
for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < args[i].length; j++)
        assert(args[i][j] === copy[i][j], 'Any item of the initial array was changed')
}
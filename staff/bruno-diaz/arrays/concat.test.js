console.log('TEST concat')


console.log('CASE Concat two or more arrays into new array')

var args = []
args.length = Math.floor(Math.random() * 10)

for (var i = 0; i < args.length; i++) {
    var arg = []
    arg.length = Math.floor(Math.random() * 10)

    for (var j = 0; j < arg.length; j++) {
        arg[j] = Math.floor(Math.random() * 100)
    }

    args[i] += arg
}

var result = concat.apply(args)

assert(result instanceof Array, 'result must be an array')

// ....
console.log('SPEC search()')

// 1

var spec = 'should find "hola" in "hola mundo" returning 0'

var text = 'hola mundo'
var pattern = 'hola'

var res = search(text, pattern)

if (res === 0)
    console.log(spec)
else
    console.error(spec)

// 2

var spec = 'should find "la mu" in "hola mundo" returning 2'

var text = 'hola mundo'
var pattern = 'la mu'

var res = search(text, pattern)

if (res === 2)
    console.log(spec)
else
    console.error(spec)

// 3

var spec = 'should find "la mo" in "hola mundo" returning -1'

var text = 'hola mundo'
var pattern = 'la mo'

var res = search(text, pattern)

if (res === -1)
    console.log(spec)
else
    console.error(spec)
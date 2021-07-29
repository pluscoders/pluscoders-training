describe('String.prototype.toCapitalCase()')

// 1

var spec = 'should return "Hola Mundo" for string "hola mundo"'

var s = 'hola mundo'

var result = s.toCapitalCase()

assert(result === 'Hola Mundo', spec)

// 2

var spec = 'should return "1 2 3 4 5" for string "1 2 3 4 5"'

var s = '1 2 3 4 5'

var result = s.toCapitalCase()

assert(result === '1 2 3 4 5', spec)

// 3

var spec = 'should return "TODO Comprar Leche" for string "TODO comprar leche"'

var s = 'TODO comprar leche'

var result = s.toCapitalCase()

assert(result === 'TODO Comprar Leche', spec)

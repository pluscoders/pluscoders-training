describe('String.prototype.invertCase()')

// 1

var spec = 'should return "HOLA MUNDO" for string "hola mundo"'

var s = 'hola mundo'

var result = s.invertCase()

assert(result === 'HOLA MUNDO', spec)

// 2

var spec = 'should return "1 2 3 4 5" for string "1 2 3 4 5"'

var s = '1 2 3 4 5'

var result = s.invertCase()

assert(result === '1 2 3 4 5', spec)

// 3

var spec = 'should return "todo COMPRAR LECHE" for string "TODO comprar leche"'

var s = 'TODO comprar leche'

var result = s.invertCase()

assert(result === 'todo COMPRAR LECHE', spec)

// 4

var spec = 'should return "HoLA mUNdo" for string "hOla MunDO"'

var s = 'hOla MunDO'

var result = s.invertCase()

assert(result === 'HoLA mUNdo', spec)

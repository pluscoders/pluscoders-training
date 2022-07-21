var a

a = 1

var b = a

var s = 'hola mundo!'

s = s + ' 10'

var o = {}

o['name'] = 'Peter'

o['surname'] = 'Pan'

var p = o['name']

var q = o

q.name = 'Josefina'

o.surname = 'Garcia'

var salute = function(to) {
    return 'Hello, ' + to + '!'
}

o.salute = salute

o.salute('Andrea')

var f = []

f['0'] = 'apple'
f[1] = 'orange'

f.push('banana')

f.name = 'Fruits Array'

f[9] = 'lemon' 

f[7] = 'watermelon'

f[8] = o

f[8].salute('Andrea')
// 'Hello, Andrea!'
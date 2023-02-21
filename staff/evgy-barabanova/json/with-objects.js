var obj = { name: 'Peter' }

var json = JSON.stringify(obj)

json
// '{"name":"Peter"}'
var objAgain = JSON.parse(json)

objAgain
// {name: 'Peter'}

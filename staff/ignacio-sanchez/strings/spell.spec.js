// Falta por corregir la función 

describe('spell()')
// 1

var spec = 'should spell "Hello" as "H","e","l","l","o" '

var text = 'Hello'

var res = spell(text)

assert (res[0] === 'h' && res[1] === 'e'&& res[2] === 'l'&& res[3] === 'l'&& res[4] === 'o',spec)

// 2

var spec = 'should spell "The army" as "T","h","e"," ","a","r","m","y" '


// 3

var spec = 'should spell "Classic" as "C","l","a","s","s","i","c" '


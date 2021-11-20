// urruy.protoype.indexOf.spec.js

// 1

var urr = new Urruy

urr[0] = 'monkey'
urr[1] = 'dog'
urr[2] = 'doge'
urr[3] = 'cat'
urr.length = 4

var r = urr.indexOf('doge')

console.assert(r === 2)
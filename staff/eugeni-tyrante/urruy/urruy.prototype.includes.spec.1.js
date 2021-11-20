// urruy.protoype.includes.spec.js

// 1

var urr = new Urruy

urr[0] = 'monkey'
urr[1] = 'frog'
urr[2] = 'dog'
urr[3] = 'cat'
urr[4] = 'dolphin'
urr[5] = 'bird'
urr[6] = 'mouse'
urr[7] = 'rat'
urr.length = 8

var r = urr.includes('dog')

console.assert(r === true)

// 2

var urr = new Urruy

urr[0] = 'monkey'
urr[1] = 'frog'
urr[2] = 'dog'
urr[3] = 'cat'
urr[4] = 'dolphin'
urr[5] = 'bird'
urr[6] = 'mouse'
urr[7] = 'rat'
urr.length = 8

var r = urr.includes('dog', 5)

console.assert(r === false)
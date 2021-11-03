// urruy.protoype.concat.spec.js

// 1

var urr = new Urruy
urr[0] = 1
urr[1] = 2
urr[2] = 3
urr[3] = 4
urr.length = 4

var urra = new Urruy
urra[0] = 5
urra[1] = 6
urra[2] = 7
urra[3] = 8
urra.length = 4

var furra = new Urruy
furra[0] = 9
furra[1] = 10
furra[2] = 11
furra[3] = 12
furra.length = 4

urr.concat(urra, furra)

console.assert(urr.length === 12)
console.assert(urr[0] === 1)
console.assert(urr[1] === 2)
console.assert(urr[2] === 3)
console.assert(urr[3] === 4)
console.assert(urr[4] === 5)
console.assert(urr[5] = 6)
console.assert(urr[6] = 7)
console.assert(urr[7] = 8)
console.assert(urr[8] = 9)
console.assert(urr[9] = 10)
console.assert(urr[10] = 11)
console.assert(urr[11] = 12)
function sum(a, b) {
  if (typeof a !== 'number') throw new Error('a is not number')
  if (typeof b !== 'number') throw new Error('b is not number')

  return a + b
}

try {
  console.log(sum(1, '2'))
  //console.log(sum(1, true))
  //console.log(sum(1, {}))    
  //console.log(sum(1, 2))

  console.log('good ending here')
} catch(error) {
  alert(error.message)
}

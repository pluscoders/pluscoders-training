function reduce(array, callback, accum) {
  debugger
  for (let i = 0; i < array.length; i++) {
    const element = array[i]

    accum = callback(accum, element)
  }

  return accum
}

module.exports = reduce

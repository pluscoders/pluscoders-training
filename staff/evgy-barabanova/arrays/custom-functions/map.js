function map(array, callback) {
  const mapped = []

  for (let i = 0; i < array.length; i++) {
    const element = array[i]

    const result = callback(element)

    mapped.push(result)
  }

  return mapped
}

module.exports = map

function filter(array, callback) {
  const filtered = []

  for (let i = 0; i < array.length; i++) {
    const element = array[i]

    const match = callback(element) // true or false

    if (match) filtered.push(element)
  }

  return filtered
}

module.exports = filter

const fs = require('fs').promises
const path = require('path')

//__dirname // directory = folder (same thing)
// /home/evgenia/pluscoders-training/staff/evgy-barabanova/node/fs

let filePath = path.join(__dirname, 'hello-world.txt')
// /home/evgenia/pluscoders-training/staff/evgy-barabanova/node/fs/hello-world.txt

console.log(0, 'before reading file')

// non blocking read file
fs.readFile(filePath, 'utf8')
  .then(function (content) {
    console.log(1, 'after reading file', content)

    filePath = path.join(__dirname, 'hola-mundo.txt')
    // /home/evgenia/pluscoders-training/staff/evgy-barabanova/node/fs/hello-world.txt

    console.log(0, 'before reading file 2')

    // non blocking read file
    return fs.readFile(filePath, 'utf8')
  })
  .then(function (content) {
    console.log(1, 'after reading file 2', content)
  })
  .catch(function (error) {
    console.error(error.message)
  })

console.log(2, 'blah blah')

console.log(3, 'last log here')

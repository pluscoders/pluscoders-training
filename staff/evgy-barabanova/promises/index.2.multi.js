const fs = require('fs')
const path = require('path')

//__dirname // directory = folder (same thing)
// /home/evgenia/pluscoders-training/staff/evgy-barabanova/node/fs

let filePath = path.join(__dirname, 'hello-world.txt')
// /home/evgenia/pluscoders-training/staff/evgy-barabanova/node/fs/hello-world.txt

console.log(0, 'before reading file')

// non blocking read file
fs.readFile(filePath, 'utf-8', function (error, content) {
  if (error) {
    console.error(error.message)

    return
  }

  console.log(1, 'after reading file', content)

  filePath = path.join(__dirname, 'hola-mundo.txt')
  // /home/evgenia/pluscoders-training/staff/evgy-barabanova/node/fs/hello-world.txt

  console.log(0, 'before reading file 2')

  // non blocking read file
  fs.readFile(filePath, 'utf-8', function (error, content) {
    if (error) {
      console.error(error.message)

      return
    }

    console.log(1, 'after reading file 2', content)
  })
})

console.log(2, 'blah blah')

console.log(3, 'last log here')

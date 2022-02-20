const fs = require('fs')
const path = require('path')

//__dirname // directory = folder (same thing)
// /home/evgenia/pluscoders-training/staff/evgy-barabanova/node/fs

const filePath = path.join(__dirname, 'hello-world.txt')
// /home/evgenia/pluscoders-training/staff/evgy-barabanova/node/fs/hello-world.txt

console.log(0, 'before reading file')

try {
  // blocking file read
  const content = fs.readFileSync(filePath, 'utf-8')

  console.log(1, 'after reading file', content)
} catch(error) {
  console.error(error.message)
}

console.log(2, 'blah blah')

console.log(3, 'last log here')

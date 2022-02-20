const fs = require('fs').promises
const path = require('path')

//__dirname // directory = folder (same thing)
// /home/evgenia/pluscoders-training/staff/evgy-barabanova/node/fs

const filePath = path.join(__dirname, 'hello-world.txt')
// /home/evgenia/pluscoders-training/staff/evgy-barabanova/node/fs/hello-world.txt

console.log(0, 'before reading file');

// non blocking read file
/*f
s.readFile(filePath, 'utf8')
  .then(function (content) {
    console.log(1, 'after reading file', content)
  })
  .catch(function (error) {
    console.error(error.message)
  })
*/

(async function() {
  try {
    // non blocking read file
    const content = await fs.readFile(filePath, 'utf8')

    console.log(1, 'after reading file', content)
  } catch (error) {
    console.error(error.message)
  }
})() // IIFE - Immediately Invoked Function Expresssion

console.log(2, 'blah blah')

console.log(3, 'last log here')

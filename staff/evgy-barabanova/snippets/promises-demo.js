function sum(a, b) {
  return new Promise((resolve, reject) => {
      if (typeof a !== 'number') {
          reject(new Error('a is not number'))

          return
      }

      if (typeof b !== 'number') {
          reject(new Error('b is not number'))

          return
      }

      resolve(a + b)
  })
}

//sum(1, 2) // 1
  //.then(result => console.log(result)) // 2
  //.catch(error => alert(error.message)) // 3


(async () => {
 try {
      const result = await sum(1, '2')

      console.log(result)
 } catch(error) {
     alert(error.message)
 }
})()





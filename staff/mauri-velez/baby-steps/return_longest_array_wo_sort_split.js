//*CHALLENGE codear una funcion que te devuelve un array con las palabras más largas de un texto cualquiera SIN usar split SIN usar sort HINT solo usar for (loop) e if (conditional flow)

function rtnLongestWord(string) {
    let longestWord = ''
  
    for (let i = 0; i >= 0; i = string.indexOf(' ', i + 1)) {
      let word = undefined
      let j    = string.indexOf(' ', i + 1)
      
      if (j === -1) {
        word = string.substring(i + 1)
      } else if (i == 0) {
        word = string.substring(i, j)
      } else {
        word = string.substring(i + 1, j)
      }
      
       
      if (word.length > longestWord.length) {
        longestWord = word
      }
    }
    
    return longestWord
  }
  
  rtnLongestWord('codear una funcion que te devuelve un array con las palabras más largas de un texto lapalabramaslarga')
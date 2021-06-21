console.log('SPEC split')
  
  // 1
  
  var spec = 'text "Hello World" and pattern " " should return ["Hello","World"]'
  
  var splitted = split("Hello World", " ")

  console.assert(splitted[0] === "Hello" && splitted[1] === "World", spec)
  
  // 2
  
  var spec = 'text "Hola mundo" and pattern "o" should return ["H", "la mund", ""]'
  
  var splitted = split("Hola mundo", "o")
  
  console.assert(splitted[0] === "H" && splitted[1] === "la mund" && splitted[2] === "", spec)
  
  // 3
  
  var spec = 'text "Hola mundo" and pattern "a" should return ["Hol"," mundo"]'
  
  var splitted = split("Hola mundo", "a")
  
  console.assert(splitted[0] === "Hol" && splitted[1] === " mundo", spec)
  
  // 4
  
  var spec = 'text "Ho ho ho feliz todo el mundo" and pattern "o" should return ["H", "h", "h", "feliz t", "d", "el mund", ""]'
  
  var splitted = split("Ho ho ho feliz todo el mundo", "o")
  
  console.assert(splitted[0] === "H" && splitted[1] === " h" && splitted[2] === " h" && splitted[3] === " feliz t" && splitted[4] === "d" && splitted[5] === " el mund" && splitted[6] === "", spec)
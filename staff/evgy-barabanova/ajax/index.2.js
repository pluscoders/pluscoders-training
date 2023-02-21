function searchVehicles(query, callback) {
  const xhr = new XMLHttpRequest()

  // response

  xhr.addEventListener('load', event => {
    const json = xhr.responseText

    const vehicles = JSON.parse(json)

    //console.log(vehicles)
    callback(null, vehicles)
  })

  // request

  xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${query}`)

  xhr.send()
}

// demos

searchVehicles('black', (error, vehicles) => { // callback hell
  if (error) {
    console.error(error)

    return
  }

  console.log(1, 'blacks', vehicles)

  searchVehicles('white', (error, vehicles) => {
    if (error) {
      console.error(error)
  
      return
    }
  
    console.log(2, 'whites', vehicles)

    searchVehicles('gray', (error, vehicles) => {
      if (error) {
        console.error(error)
    
        return
      }
    
      console.log(3, 'grays', vehicles)
    })
  })
})

function searchVehicles(query, callback) {
  const xhr = new XMLHttpRequest()

  xhr.addEventListener('load', event => {
    const json = xhr.responseText

    const vehicles = JSON.parse(json)

    //console.log(vehicles)
    callback(null, vehicles)
  })

  xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${query}`)

  xhr.send()
}

// demos

searchVehicles('black', (error, vehicles) => {
  if (error) {
    console.error(error)

    return
  }

  console.log(vehicles)
})


searchVehicles('white', (error, vehicles) => {
  if (error) {
    console.error(error)

    return
  }

  console.log(vehicles)
})

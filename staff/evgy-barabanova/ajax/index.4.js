function searchVehicles(query) {
  return new Promise((resolve, reject) => { // wrap in a promise
    const xhr = new XMLHttpRequest()

    // response

    xhr.addEventListener('load', event => {
      const json = xhr.responseText

      const vehicles = JSON.parse(json)

      //console.log(vehicles)
      resolve(vehicles)
    })

    // request

    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${query}`)

    xhr.send()
  })
}

// demos

(async function () {
  try {
    let vehicles = await searchVehicles('black')

    console.log(1, 'blacks', vehicles)

    vehicles = await searchVehicles('white')

    console.log(2, 'whites', vehicles)

    vehicles = await searchVehicles('gray')

    console.log(3, 'grays', vehicles)
  } catch (error) {
    console.error(error.message)
  }
})()


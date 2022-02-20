const xhr = new XMLHttpRequest()

// response

xhr.addEventListener('load', event => {
  const json = xhr.responseText

  const vehicles = JSON.parse(json)

  console.log(vehicles)
})

// request

xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=marvel')

xhr.send()

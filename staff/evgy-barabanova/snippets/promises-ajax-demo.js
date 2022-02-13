// logic

function searchVehicles(query) {
  return fetch(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${query}`)
      .then(response => response.json())
      .then(vehicles => vehicles)
}

// view

const form = document.createElement('form')
const input = document.createElement('input')
const button = document.createElement('button')

input.placeholder = 'criteria'
button.innerText = 'Search'

form.append(input, button)

const list = document.createElement('ul')

document.body.append(form, list)

//form.onsubmit = event => {
form.addEventListener('submit', event => {
  event.preventDefault()

  const query = input.value

  //console.log(query)

  searchVehicles(query)
      .then(vehicles => {
          list.innerHTML = ''

          vehicles.forEach(vehicle => {
              const name = document.createElement('h2')
              name.innerText = vehicle.name

              const image = document.createElement('img')
              image.src = vehicle.thumbnail

              const item = document.createElement('li')

              item.append(name, image)

              list.append(item)
          })
      })
//}
})

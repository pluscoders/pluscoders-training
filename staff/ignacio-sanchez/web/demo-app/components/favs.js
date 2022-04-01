const homeFavouritesLink = homeView.querySelector('#myLinks #favourites')

homeFavouritesLink.onclick = event => {
  event.preventDefault()

  const token = _token

  const favouritesView = homeView.querySelector('.favourites')

  id = undefined

  const feedback = searchForm.querySelector('.feedback')

  feedback.innerText = ''
  //feedback.classList.add('off')

  //homeView.classList.add('off')

  favouritesView.classList.remove('off')

  try {
    retrieveFavVehicles(token, ((error, vehicles) => {
      if (vehicles.length == 0) {
        error = document.createElement('p')

        resultsView.innerHTML = ''

        error.innerText = 'No favourites found '

        resultsView.append(error)

        return
      }

      const list = document.createElement('ul')

      vehicles.forEach(car => {

        const result = document.createElement('li')

        const id = document.createElement('h3')
        const name = document.createElement('p')
        const maker = document.createElement('p')
        const image = document.createElement('img')
        image.classList.add('image-detail')

        id.innerText = `Car ID: ${car.id}`
        maker.innerText = `Brand: ${car.maker}`
        name.innerText = `Name: ${car.name}`
        image.src = car.image

        result.append(id, maker, name, image)

        list.append(result)

      })


      favouritesView.innerHTML = ''

      favouritesView.append(list)

      resultsView.classList.add('off')
      cartView.classList.add('off')

      favouritesView.classList.remove('off')

    }))
  } catch (error) {
    feedback.innerText = error.message

    feedback.classList.remove('off')
  }
}
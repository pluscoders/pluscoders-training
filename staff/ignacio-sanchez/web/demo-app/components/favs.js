const homeFavouritesLink = homeView.querySelector('#myLinks #favourites')

homeFavouritesLink.onclick = event => {
  event.preventDefault()

  const token = _token

  const favouritesView = homeView.querySelector('.favourites')

  id = undefined

  const feedback = searchForm.querySelector('.feedback')

  feedback.innerText = ''
  //feedback.classList.add('off')

  ordersView.classList.add('off')

  favouritesView.classList.remove('off')

  

  try {
    retrieveFavVehicles(token, ((error, vehicles) => {
      if (vehicles.length == 0) {
        error = document.createElement('p')

        resultsView.classList.remove('off')

        resultsView.innerHTML = ''

        error.innerText = 'No favourites found '

        resultsView.append(error)

        return
      }

      const list = document.createElement('ul')

      vehicles.forEach(vehicle => {

        const result = document.createElement('li')

        const id = document.createElement('h3')
        const name = document.createElement('p')
        const maker = document.createElement('p')
        const image = document.createElement('img')
        image.classList.add('image-detail')
        const favButton = document.createElement('button')
        favButton.classList.add('button--small_fav')

        id.innerText = `Car ID: ${vehicle.id}`
        maker.innerText = `Brand: ${vehicle.maker}`
        name.innerText = `Name: ${vehicle.name}`
        image.src = vehicle.image
        favButton.innerText = `${vehicle.id ? '💜' : '🤍'}`

        favButton.onclick = event => {
          event.stopPropagation()

          try {
            toggleFavVehicle(_token, vehicle.id, error => {
              if (error) return alert(error.message)
              list.removeChild(result)

              favButton.innerText = favButton.innerText === '💜' ? '🤍' : '💜'
            })
          } catch (error) {
            alert(error.message)
            feedback.innerText = error.message

            feedback.classList.remove('off')
          }
        }

        result.append(id, maker, name, image, favButton)

        list.append(result)

      })

      const title = document.createElement('h2')
      title.innerText = 'Favourites'

      favouritesView.innerHTML = ''

      favouritesView.append(title, list)

      resultsView.classList.add('off')
      cartView.classList.add('off')
      detailView.classList.add('off')
      profileView.classList.add('off')

      favouritesView.classList.remove('off')

    }))
  } catch (error) {
    feedback.innerText = error.message

    feedback.classList.remove('off')
  }
}
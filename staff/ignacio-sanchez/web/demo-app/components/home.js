const homeProfileLink = homeView.querySelector('#myLinks #profile')

homeProfileLink.onclick = event => {
  event.preventDefault()

  const token = _token

  try {
    retrieveUser(token, (error, user) => {
      if (error) {
        feedback.innerText = error.message

        feedback.classList.remove('off')

        return
      }

      const profileForm = profileView.querySelector('form')

      profileForm.firstname.value = user.firstname
      profileForm.lastname.value = user.lastName
      profileForm.city.value = user.city
      profileForm.country.value = user.country
      profileForm.email.value = user.username

      homeView.classList.add('off')

      profileView.classList.remove('off')
    })
  } catch (error) {
    alert(error.message)
  }

}

const homeSignoutLink = homeView.querySelector('#myLinks #signout')

homeSignoutLink.onclick = event => {
  event.preventDefault()

  _token = undefined
  delete sessionStorage.token

  homeView.classList.add('off')

  loginView.classList.remove('off')

}

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

      favouritesView.classList.remove('off')

    }))
  } catch (error) {
    feedback.innerText = error.message

    feedback.classList.remove('off')
  }
}

const homeBasketLink = homeView.querySelector('#myLinks #basket')

homeBasketLink.onclick = event => {
  event.preventDefault()

  const token = _token

  const basketView = homeView.querySelector('.basket')

  //id = undefined

  const feedback = searchForm.querySelector('.feedback')

  feedback.innerText = ''
  //feedback.classList.add('off')

  //homeView.classList.add('off')

  basketView.classList.remove('off')

  try {
    retrieveVehiclesFromCart(token, ((error, vehicles) => {
      if (vehicles.length == 0) {
        error = document.createElement('p')

        resultsView.innerHTML = ''

        error.innerText = 'No favourites found '

        resultsView.append(error)

        return
      }

      const list = document.createElement('ul')

      vehicles.forEach(vehicle => {

        const result = document.createElement('li')

        const id = document.createElement('h3')
        const qty = document.createElement('p')
        const addToCartButton = document.createElement('button')
        const removeFromCartButton = document.createElement('button')
        addToCartButton.classList.add('button--small')
        removeFromCartButton.classList.add('button--small')


        id.innerText = `Car ID: ${vehicle.id}`
        qty.innerText = `Quantity: ${vehicle.qty}`
        addToCartButton.innerText = 'Add'
        removeFromCartButton.innerText = 'Remove'

        addToCartButton.onclick = event => {
          event.stopPropagation()

          try {
            addVehicleToCart(_token, vehicle.id, error => {
              if (error) return alert(error.message)
              
            })
          } catch (error) {
            alert(error.message)
            //feedback.innerText = error.message

            //feedback.classList.remove('off')
          }

        }

        result.append(id, qty, addToCartButton, removeFromCartButton)

        list.append(result)

      })


      basketView.innerHTML = ''

      basketView.append(list)

      resultsView.classList.add('off')
      favouritesView.classList.add('off')

      basketView.classList.remove('off')

    }))
  } catch (error) {
    feedback.innerText = error.message

    feedback.classList.remove('off')
  }
}


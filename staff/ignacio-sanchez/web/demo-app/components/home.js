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

  id = undefined

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

  homeView.classList.add('off')

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

      vehicles.forEach (car => {

        const result = document.createElement('li')
        
        const id = document.createElement('p')
        const name = document.createElement('h3')
  
        id.innerText = `Car ID: ${car.id}`
        name.innerText = `Name: ${car.name}`

        result.append(id, name)

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


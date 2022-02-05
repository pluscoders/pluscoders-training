const homeProfileLink = homeView.querySelector('#myLinks #profile')

homeProfileLink.onclick = function (event) {
  event.preventDefault()

  //const user = retrieveUser(id)
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

const profilePasswordLink = profileView.querySelector('.profile__password-button')

profilePasswordLink.onclick = function (event) {
  event.preventDefault()

  profileView.classList.add('off')

  passwordView.classList.remove('off')

}

const passwordForm = passwordView.querySelector('form')

passwordForm.onsubmit = function (event) {
  event.preventDefault()

  const oldPassword = passwordForm.oldPassword.value
  const password = passwordForm.password.value

  const token = _token

  try {
    updateUserPassword(token, oldPassword, password, (error, user) => {
      if (error) {
        feedback.innerText = error.message

        feedback.classList.remove('off')

        return
      }

      const passwordForm = passwordView.querySelector('form')


      profileView.classList.remove('off')

      passwordView.classList.add('off')
    })
  } catch (error) {
    alert(error.message)
  }
}

const passwordProfileLink = password.querySelector('.password__back-button')

passwordProfileLink.onclick = function (event) {
  event.preventDefault()

  passwordView.classList.add('off')

  profileView.classList.remove('off')

}


const homeSignoutLink = homeView.querySelector('#myLinks #signout')

homeSignoutLink.onclick = function (event) {
  event.preventDefault()

  id = undefined

  homeView.classList.add('off')

  loginView.classList.remove('off')

}

const profileForm = profileView.querySelector('form')

profileForm.onsubmit = function (event) {
  event.preventDefault()

  const feedback = profileForm.querySelector('.feedback')

  feedback.innerText = ' '
  feedback.classList.add('off')

  const token = _token

  const firstname = profileForm.firstname.value
  const lastname = profileForm.lastname.value
  const city = profileForm.city.value
  const country = profileForm.country.value
  const email = profileForm.email.value
  // const password = profileForm.password.value


  try {
    updateUser(token, firstname, lastname, city, country, email, error => {
      if (error) return alert(error.message)

      const homeTitle = homeView.querySelector('a')
    })
  } catch (error) {
    feedback.innerText = error.message

    feedback.classList.remove('off')
  }
}

const profileUnregisterLink = profileView.querySelector('.profile__unregister-button')

profileUnregisterLink.onclick = function (event) {
  event.preventDefault()

  profileView.classList.add('off')

  unregisterView.classList.remove('off')

}

const unregisterProfileLink = unregisterView.querySelector('.unregister__back-button')

unregisterProfileLink.onclick = function (event) {
  event.preventDefault()

  unregisterView.classList.add('off')

  profileView.classList.remove('off')

}



const unregisterForm = unregisterView.querySelector('form')

unregisterForm.onsubmit = function (event) {
  event.preventDefault()

  const feedback = unregisterForm.querySelector('.feedback')

  feedback.innerText = ' '
  feedback.classList.add('off')

  const token = _token

  const password = unregisterForm.password.value

  try {
    unregisterUser(token, password, error => {
      if (error) {
        return alert(error.message)
      }
      else {
        return alert('user unregistred')

      }


    })
    unregisterView.classList.add('off')
    loginView.classList.remove('off')

  } catch (error) {
    feedback.innerText = error.message

    feedback.classList.remove('off')
  }
}

const profileBackButton = profileView.querySelector('.profile__back-button')

profileBackButton.onclick = function () {
  profileView.classList.add('off')

  const token = _token

  retrieveUser(token, (error, user) => {
    if (error) {
      feedback.innerText = error.message

      feedback.classList.remove('off')

      return
    }

    const homeTitle = homeView.querySelector('a')

    homeTitle.innerText = 'Hello,' + user.firstname + '!'

    homeView.classList.remove('off')


  })

}


// search form


const searchForm = homeView.querySelector('form')

searchForm.onsubmit = function (event) {
  event.preventDefault()

  const results = homeView.querySelector('.results')
  results.innerHTML = ''

  const brand = searchForm.brand.value
  const model = searchForm.model.value

  //const filtered = searchVehicles(query, model)

  try {

    searchVehicles(brand, model, ((error, vehicles) => {
      if (error) {
        feedback.innerText = error.message

        feedback.classList.remove('off')

        return
      }
      
      const list = document.createElement('ul')

      vehicles.forEach(function (car) {
        const result = document.createElement('li')

        const name = document.createElement('h3')
        const thumbnail = document.createElement('img')
        const price = document.createElement('span')
        const button = document.createElement('button')
        button.classList.add('button--small')

        name.innerText = car.name + ' (' + car.id + ')'
        thumbnail.src = car.thumbnail
        price.innerText = car.price + ' $'
        button.innerText = 'Add to basket'

        result.append(name, thumbnail, price, button)

        list.append(result)

        result.onclick = event => {
          retrieveVehicle(car.id, (error, car) => {
            console.log(car)
          // TODO create elements for the detail (h2, img, p, ...) and put them in the container (detail)
          // TODO switch results off, turn detail on
          })
        }
      })
      
      results.append(list)

    }))
      
  }

 catch (error) {

  error = document.createElement('p')

  error.innerText = 'No matches found with brand ' + searchForm.brand.value + " and model " + searchForm.model.value

  results.append(error)
}

results.classList.remove('off')
}




const cart = homeView.getElementsByClassName('button--small')


cart.onclick = function (event) {
  event.preventDefault()

  const cartResult = homeView.querySelector('.cartResult')
  cartResult.innerHTML = ''

  const counter = counterCart()

}

// const counts = 0;
// (".button--small").click(function () {
//   counts += +1;
//   (".cart-counter").animate({
//     (this).text(counts)
// });


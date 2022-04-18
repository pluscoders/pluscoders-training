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


const profilePasswordLink = profileView.querySelector('.profile__password-button')

profilePasswordLink.onclick = event => {
  event.preventDefault()

  profileView.classList.add('off')

  passwordView.classList.remove('off')

}

const profileForm = profileView.querySelector('form')

profileForm.onsubmit = event => {
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

profileUnregisterLink.onclick = event => {
  event.preventDefault()

  profileView.classList.add('off')

  unregisterView.classList.remove('off')

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

    ordersView.classList.add('off')


  })

}
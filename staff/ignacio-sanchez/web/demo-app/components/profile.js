const profilePasswordLink = profileView.querySelector('.profile__password-button')

profilePasswordLink.onclick = function (event) {
  event.preventDefault()

  profileView.classList.add('off')

  passwordView.classList.remove('off')

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
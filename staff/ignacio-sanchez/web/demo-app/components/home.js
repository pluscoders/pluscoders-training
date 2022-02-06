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

const homeSignoutLink = homeView.querySelector('#myLinks #signout')

homeSignoutLink.onclick = function (event) {
  event.preventDefault()

  id = undefined

  homeView.classList.add('off')

  loginView.classList.remove('off')

}
const loginRegisterLink = loginView.querySelector('.button--signin')

loginRegisterLink.onclick = event => {
  event.preventDefault()

  loginForm.email.value = ''
  loginForm.password.value = ''

  const feedback = loginForm.querySelector('.feedback')

  feedback.innerText = ''
  feedback.classList.add('off')

  registerForm.firstname.value = ''
  registerForm.lastname.value = ''
  registerForm.city.value = ''
  registerForm.country.value = ''
  registerForm.email.value = ''
  registerForm.password.value = ''

  loginView.classList.add('off')

  registerView.classList.remove('off')
}

const loginForm = loginView.querySelector('form')

loginForm.onsubmit = event => {
  event.preventDefault()

  const email = loginForm.email.value
  const password = loginForm.password.value

  const username = loginForm.email.value

  const feedback = loginForm.querySelector('.feedback')

  try {
    authenticateUser(email, password, (error, token) => {
      if (error) {
        if (error instanceof ServerError)
          feedback.innerText = 'Sorry, there was an error an we will fix it as soon as possible'
        else
          feedback.innerText = error.message

        feedback.classList.remove('off')

        return
      }

      _token = token
      sessionStorage.token = _token

      try {
        retrieveUser(token, (error, user) => {
          if (error) {
            feedback.innerText = error.message

            feedback.classList.remove('off')

            return
          }

          loginForm.email.value = ''
          loginForm.password.value = ''

          loginView.classList.add('off')

          const homeTitle = homeView.querySelector('a')

          homeTitle.innerText = 'Hello,' + user.firstname + '!'

          homeView.classList.remove('off')
        })
      } catch (error) {
        feedback.innerText = error.message

        feedback.classList.remove('off')
      }

    })

  } catch (error) {
    feedback.innerText = error.message

    feedback.classList.remove('off')
  }

}
const loginForm = loginView.querySelector('.login__form')

loginForm.onsubmit = event => {
  event.preventDefault()

  const usernameInput = loginForm.querySelector('.login__username-input')
  const username = usernameInput.value


  const passwordInput = loginForm.querySelector('.login__password-input')
  const password = passwordInput.value

  const result = authenticateUser(username, password)

  if (result) {
    loginView.classList.add('off')
    homeView.classList.remove('off')
  }
}

const loginRegisterLink = loginView.querySelector('.login__register-link')

loginRegisterLink.onclick = event => {
  event.preventDefault()

  loginView.classList.add('off')

  registerView.classList.remove('off')
}

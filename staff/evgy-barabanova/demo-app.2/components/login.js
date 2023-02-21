const loginForm = loginView.querySelector('.login__form')

loginForm.onsubmit = event => {
  event.preventDefault()

  const usernameInput = loginForm.querySelector('.login__username-input')

  const username = usernameInput.value

  console.log(username)

  // TODO same for password
  const passwordInput = loginForm.querySelector('.login__password-input')

  const password = passwordInput.value

  console.log(password)
}

const loginRegisterLink = loginView.querySelector('.login__register-link')

loginRegisterLink.onclick = event => {
  event.preventDefault()

  loginView.classList.add('off')

  registerView.classList.remove('off')
}

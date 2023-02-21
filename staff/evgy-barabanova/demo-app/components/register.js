const registerForm = registerView.querySelector('.register__form')

registerForm.onsubmit = event => {
  event.preventDefault()

  const nameInput = registerForm.querySelector('.register__name-input')
  const name = nameInput.value

  const usernameInput = registerForm.querySelector('.register__username-input')
  const username = usernameInput.value

  const passwordInput = registerForm.querySelector('.register__password-input')
  const password = passwordInput.value

  registerUser(name, username, password)

  registerView.classList.add('off')
  loginView.classList.remove('off')
}

const registerLoginLink = registerView.querySelector('.register__login-link')

registerLoginLink.onclick = event => {
  event.preventDefault()

  registerView.classList.add('off')

  loginView.classList.remove('off')
}

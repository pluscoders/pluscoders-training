const registerForm = registerView.querySelector('.register__form')

registerForm.onsubmit = event => {
  event.preventDefault()

  const nameInput = registerForm.querySelector('.register__name-input')

  const name = nameInput.value

  console.log(name)

  const usernameInput = registerForm.querySelector('.register__username-input')

  const username = usernameInput.value

  console.log(username)

  const passwordInput = registerForm.querySelector('.register__password-input')

  const password = passwordInput.value

  console.log(password)
}

const registerLoginLink = registerView.querySelector('.register__login-link')

registerLoginLink.onclick = event => {
  event.preventDefault()

  registerView.classList.add('off')

  loginView.classList.remove('off')
}

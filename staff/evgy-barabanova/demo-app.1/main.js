const landingView = document.querySelector('.landing')
const loginView = document.querySelector('.login')
const registerView = document.querySelector('.register')

landingView.classList.remove('off')

const landingLoginLink = landingView.querySelector('.landing__login-link')

landingLoginLink.onclick = event => {
  event.preventDefault()

  landingView.classList.add('off')

  loginView.classList.remove('off')
}

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

const landingLoginLink = landingView.querySelector('.landing__login-link')

landingLoginLink.onclick = event => {
  event.preventDefault()

  landingView.classList.add('off')

  loginView.classList.remove('off')
}

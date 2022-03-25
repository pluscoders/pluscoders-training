

const homeSignoutLink = homeView.querySelector('#myLinks #signout')

homeSignoutLink.onclick = event => {
  event.preventDefault()

  _token = undefined
  delete sessionStorage.token

  homeView.classList.add('off')

  loginView.classList.remove('off')

}






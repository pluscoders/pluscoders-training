const unregisterProfileLink = unregisterView.querySelector('.unregister__back-button')

unregisterProfileLink.onclick = event => {
  event.preventDefault()

  unregisterView.classList.add('off')

  profileView.classList.remove('off')

}


const unregisterForm = unregisterView.querySelector('form')

unregisterForm.onsubmit = event => {
  event.preventDefault()

  const feedback = unregisterForm.querySelector('.feedback')

  feedback.innerText = ' '
  feedback.classList.add('off')

  const token = _token

  const password = unregisterForm.password.value

  try {
    unregisterUser(token, password, error => {
      if (error) {
        return alert(error.message)
      }
      else {
        return alert('user unregistred')

      }


    })
    unregisterView.classList.add('off')
    homeView.classList.add('off')
    loginView.classList.remove('off')

  } catch (error) {
    feedback.innerText = error.message

    feedback.classList.remove('off')
  }
}
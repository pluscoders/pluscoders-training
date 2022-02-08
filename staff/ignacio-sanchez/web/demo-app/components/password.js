const passwordForm = passwordView.querySelector('form')

passwordForm.onsubmit = event => {
  event.preventDefault()

  const oldPassword = passwordForm.oldPassword.value
  const password = passwordForm.password.value

  const token = _token

  try {
    updateUserPassword(token, oldPassword, password, (error, user) => {
      if (error) {
        feedback.innerText = error.message

        feedback.classList.remove('off')

        return
      }

      const passwordForm = passwordView.querySelector('form')


      profileView.classList.remove('off')

      passwordView.classList.add('off')
    })
  } catch (error) {
    alert(error.message)
  }
}

const passwordProfileLink = password.querySelector('.password__back-button')

passwordProfileLink.onclick = event => {
  event.preventDefault()

  passwordView.classList.add('off')

  profileView.classList.remove('off')

}
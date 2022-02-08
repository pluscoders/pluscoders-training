const registerLoginLink = registerView.querySelector('.button--signin')

registerLoginLink.onclick = event => {
  event.preventDefault()

  registerView.classList.add('off')

  loginView.classList.remove('off')
}

const registerForm = registerView.querySelector('form')

registerForm.onsubmit = event => {
  event.preventDefault()


  const firstname = registerForm.firstname.value
  const lastname = registerForm.lastname.value
  const city = registerForm.city.value
  const country = registerForm.country.value
  const email = registerForm.email.value
  const password = registerForm.password.value

  //console.log(firstname, lastname, city, country, email, password)

  const feedback = registerForm.querySelector('.feedback')

  try {
    registerUser(firstname, lastname, city, country, email, password, error => {
      if (error) return alert(error.message)

      registerForm.firstname.value = ''
      registerForm.lastname.value = ''
      registerForm.city.value = ''
      registerForm.country.value = ''
      registerForm.email.value = ''
      registerForm.password.value = ''

      registerView.classList.add('off')

      loginView.classList.remove('off')
    })
  } catch (error) {
    feedback.innerText = error.message

    feedback.classList.remove('off')
  }

}

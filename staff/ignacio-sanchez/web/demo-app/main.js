// data 

var users = []


//presentation
var loginView = document.querySelector('.login')
var registerView = document.querySelector('.register')
var homeView = document.querySelector('.home')
var profileView = document.querySelector('.profile')

var loginRegisterLink = loginView.querySelector('.button--signin')

loginRegisterLink.onclick = function (event) {
  event.preventDefault()

  loginView.classList.add('off')

  registerView.classList.remove('off')
}
var registerLoginLink = registerView.querySelector('.button--signin')

registerLoginLink.onclick = function (event) {
  event.preventDefault()

  registerView.classList.add('off')

  loginView.classList.remove('off')
}

var registerForm = registerView.querySelector('form')

registerForm.onsubmit = function (event) {
  event.preventDefault()

  var firstname = registerForm.firstname.value
  var lastname = registerForm.lastname.value
  var email = registerForm.email.value
  var password = registerForm.password.value

  console.log(firstname, lastname, email, password)

  var user = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
  }

  users.push(user)

  registerView.classList.add('off')

  loginView.classList.remove('off')

}

var loginForm = loginView.querySelector('form')

loginForm.onsubmit = function (event) {
  event.preventDefault()

  var email = loginForm.email.value
  var password = loginForm.password.value

  console.log(email, password)

  var user = users.find(function (user) {
    return user.email === email && user.password === password
  })

  if (!user)
    alert('user not found')
  else {
    loginView.classList.add('off')

    var homeTitle = homeView.querySelector('a')

    homeTitle.innerText = 'Hello,' + user.firstname + '!'

    homeView.classList.remove('off')
  }

  var homeProfileLink = homeView.querySelector('#myLinks #profile')

  homeProfileLink.onclick = function (event) {
    event.preventDefault()

    homeView.classList.add('off')

    profileView.classList.remove('off')
  }

  var profileHomeLink = profileView.querySelector('#profile #update')

  profileHomeLink.onclick = function (event) {
    event.preventDefault()

    profileView.classList.add('off')
 
    homeView.classList.remove('off')

  }
}
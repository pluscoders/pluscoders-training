// console.dir(document)

console.log(document.all)

// data 

var users = []

var cars = [
  {
    id: '123',
    brand: 'Ford',
    model: 'Mustang',
    description: 'blah blah',
    year: 1960
  },
  {
    id: '124',
    brand: 'Ford',
    model: 'T',
    description: 'blah blah',
    year: 1950
  }
]


//presentation

var user

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

  user = users.find(function (user) {
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

    var profileForm = profileView.querySelector('form')

    profileForm.firstname.value = user.firstname
    profileForm.lastname.value = user.lastname
    profileForm.email.value = user.email

    profileView.classList.remove('off')
  }
}

var profileForm = profileView.querySelector('form')

profileForm.onsubmit = function (event) {
  event.preventDefault()

  var firstname = profileForm.firstname.value
  var lastname = profileForm.lastname.value
  var email = profileForm.email.value
  var password = profileForm.password.value

  console.log(firstname, lastname, email, password)

  // update user

  user.firstname = firstname
  user.lastname = lastname
  user.email = email
  user.password = password

  profileView.classList.add('off')

  var homeTitle = homeView.querySelector('a')

  homeTitle.innerText = 'Hello,' + user.firstname + '!'

  homeView.classList.remove('off')
}
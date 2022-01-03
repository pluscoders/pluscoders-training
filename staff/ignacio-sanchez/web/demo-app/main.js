// presentation

var user

var loginView = document.querySelector('.login')
var registerView = document.querySelector('.register')
var homeView = document.querySelector('.home')
var profileView = document.querySelector('.profile')

var loginRegisterLink = loginView.querySelector('.button--signin')

loginRegisterLink.onclick = function (event) {
  event.preventDefault()

  loginForm.email.value = ''
  loginForm.password.value = ''

  var feedback = loginForm.querySelector('.feedback')

  feedback.innerText = ''
  feedback.classList.add('off')

  registerForm.firstname.value = ''
  registerForm.lastname.value = ''
  registerForm.city.value = ''
  registerForm.country.value = ''
  registerForm.email.value = ''
  registerForm.password.value = ''

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
  var city = registerForm.city.value
  var country = registerForm.country.value
  var email = registerForm.email.value
  var password = registerForm.password.value

  console.log(firstname, lastname, city, country, email, password)

  if (!isNaN(firstname)) {
    alert('First name cannot be a number')

    return
  }

  if (firstname.length < 2) {
    alert('First name has less than 2 characters')

    return
  }

  if (!isNaN(city)) {
    alert('City cannot be a number')

    return
  }

  if (city.length < 2) {
    alert('City has less than 2 characters')

    return
  }

  if (!isNaN(country)) {
    alert('Country cannot be a number')

    return
  }

  if (country.length < 2) {
    alert('Country has less than 2 characters')

    return
  }

  if (!isNaN(email)) {
    alert('Email cannot be a number')

    return
  }

  if (email.length < 6) {
    alert('Email has less than 6 characters')

    return
  }

  if (password.length < 8) {
    alert('Password has less than 8 characters')

    return
  }
  try {
    registerUser(firstname, lastname, city, country, email, password)

    registerForm.firstname.value = ''
    registerForm.lastname.value = ''
    registerForm.city.value = ''
    registerForm.country.value = ''
    registerForm.email.value = ''
    registerForm.password.value = ''

    registerView.classList.add('off')

    loginView.classList.remove('off')
  } catch (error) {
    alert(error.message)
  }


}

var loginForm = loginView.querySelector('form')

loginForm.onsubmit = function (event) {
  event.preventDefault()

  var email = loginForm.email.value
  var password = loginForm.password.value

  console.log(email, password)

  var feedback = loginForm.querySelector('.feedback')

  if (!isNaN(email)) {
    feedback.innerText = 'Email cannot be a number'

    feedback.classList.remove('off')

    return
  }

  if (email.length < 6) {
    feedback.innerText = 'Email has less than 6 characters'

    feedback.classList.remove('off')

    return
  }

  if (password.length < 8) {
    feedback.innerText = 'Password has less than 8 characters'

    feedback.classList.remove('off')

    return
  }

  try {
    user = authenticateUser(email, password)

    loginForm.email.value = ''
    loginForm.password.value = ''

    loginView.classList.add('off')

    var homeTitle = homeView.querySelector('a')

    homeTitle.innerText = 'Hello,' + user.firstname + '!'

    homeView.classList.remove('off')
  } catch (error) {
    feedback.innerText = error.message

    feedback.classList.remove('off')
  }
}

var homeProfileLink = homeView.querySelector('#myLinks #profile')

homeProfileLink.onclick = function (event) {
  event.preventDefault()

  homeView.classList.add('off')

  var profileForm = profileView.querySelector('form')

  profileForm.firstname.value = user.firstname
  profileForm.lastname.value = user.lastname
  profileForm.city.value = user.city
  profileForm.country.value = user.country
  profileForm.email.value = user.email

  profileView.classList.remove('off')
}


var profileForm = profileView.querySelector('form')

profileForm.onsubmit = function (event) {
  event.preventDefault()

  var firstname = profileForm.firstname.value
  var lastname = profileForm.lastname.value
  var city = profileForm.city.value
  var country = profileForm.country.value
  var email = profileForm.email.value
  var password = profileForm.password.value

  console.log(firstname, lastname, city, country, email, password)

  // update user

  // user.firstname = firstname
  // user.lastname = lastname
  // user.city = city
  // user.country = country
  // user.email = email
  // user.password = password

  try {
    updateUser(firstname, lastname, city, country, email, password)

    profileForm.password.value = ''

    profileView.classList.add('off')

    var homeTitle = homeView.querySelector('a')

    homeTitle.innerText = 'Hello,' + user.firstname + '!'

    homeView.classList.remove('off')
  } catch (error) {
    // TODO show feedback message from error
  }
}


// search form


var searchForm = homeView.querySelector('form')

searchForm.onsubmit = function (event) {
  event.preventDefault()

  const results = homeView.querySelector('.results')
  results.innerHTML = ''

  var query = searchForm.brand.value
  var model = searchForm.model.value

  var filtered = searchVehicles(query, model)

  if (filtered.length) {
    const list = document.createElement('ul')

    filtered.forEach(function (car) {
      const result = document.createElement('li')

      const name = document.createElement('h3')
      const thumbnail = document.createElement('img')
      const price = document.createElement('span')
      const button = document.createElement('button')
      button.classList.add('button--small')

      name.innerText = car.name + ' (' + car.id + ')'
      thumbnail.src = car.thumbnail
      price.innerText = car.price + ' $'
      button.innerText = 'Add to basket'

      result.append(name, thumbnail, price, button)

      list.append(result)
    })

    results.append(list)
  } else {

    const error = document.createElement('p')

    error.innerText = 'No matches found with brand ' + searchForm.brand.value + " and model " + searchForm.model.value

    results.append(error)
  }

  results.classList.remove('off')
}


var cart = homeView.getElementsByClassName('button--small')


cart.onclick = function (event) {
  event.preventDefault()

  const cartResult = homeView.querySelector('.cartResult')
  cartResult.innerHTML = ''

  var counter = counterCart()

}

// var counts = 0;
// (".button--small").click(function () {
//   counts += +1;
//   (".cart-counter").animate({
//     (this).text(counts)
// });




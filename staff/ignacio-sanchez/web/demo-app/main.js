// console.dir(document)

console.log(document.all)

// data 

var users = []

var cars = [
  {
    id: '123',
    brand: 'Ford',
    model: 'Mustang',
    description: 'Is a battery electric compact crossover SUV',
    year: 2020,
    engine: 'Permanent magnet synchronous motor'
  },
  {
    id: '124',
    brand: 'Ferrari',
    model: 'F8',
    description: 'Is a mid-engine sport car',
    year: 2019,
    engine: '3.9 L F154 CD twin-turbo V8'
  },
  {
    id: '125',
    brand: 'Volkswagen',
    model: 'ID.3',
    description: 'Is a compact (C-segment) electric car',
    year: 2019,
    engine: 'APP 310 Permanent Magnet Brushless motor'
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
  var city = registerForm.city.value
  var country = registerForm.country.value
  var email = registerForm.email.value
  var password = registerForm.password.value

  console.log(firstname, lastname,city, country, email, password)

  var user = {
    firstname: firstname,
    lastname: lastname,
    city: city,
    country: country,
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
    profileForm.city.value = user.city
    profileForm.country.value = user.country
    profileForm.email.value = user.email

    profileView.classList.remove('off')
  }
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

  console.log(firstname, lastname,city, country, email, password)

  // update user

  user.firstname = firstname
  user.lastname = lastname
  user.city = city
  user.country = country
  user.email = email
  user.password = password

  profileView.classList.add('off')

  var homeTitle = homeView.querySelector('a')

  homeTitle.innerText = 'Hello,' + user.firstname + '!'

  homeView.classList.remove('off')
}


// search form

// function function1() {
//   var ul = document.getElementById("list_cars");
//   var li = document.createElement("li");
//   li.appendChild(document.createTextNode("Four"));
//   ul.appendChild(li);
// }

  var list_cars = document.getElementById("list_cars");
  
  const fragment = document.createDocumentFragment()

  cars.forEach(function(car) {
    const li = document.createElement('li')

    li.innerText = car.brand

    fragment.appendChild(li)
    
  })

  list_cars.appendChild(fragment)





const loginView = document.querySelector('.login')
const registerView = document.querySelector('.register')
const homeView = document.querySelector('.home')
const profileView = document.querySelector('.profile')
const passwordView = document.querySelector('.password')
const unregisterView = document.querySelector('.unregister')
const resultsView = document.querySelector('.results')
const favouritesView = document.querySelector('.favourites')
const cartView = document.querySelector('.cart')
const checkoutView = document.querySelector('.checkout')
const ordersView = document.querySelector('.orders')

// state
let id // user id
var user
let _token

try {
  checkToken(sessionStorage.token)

  _token = sessionStorage.token

  try {
    retrieveUser(_token, (error, user) => {
      if (error) {
        feedback.innerText = error.message

        feedback.classList.remove('off')

        alert(error.message)

        return
      }

      const homeTitle = homeView.querySelector('a')

      homeTitle.innerText = 'Hello,' + user.firstname + '!'

      homeView.classList.remove('off')
    })
  } catch (error) {
    feedback.innerText = error.message

    feedback.classList.remove('off')
    alert(error.message)
  }
} catch (error) {
  loginView.classList.remove('off')
}


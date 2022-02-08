const cart = homeView.getElementsByClassName('button--small')


cart.onclick = event => {
  event.preventDefault()

  const cartResult = homeView.querySelector('.cartResult')
  cartResult.innerHTML = ''

  const counter = counterCart()

}


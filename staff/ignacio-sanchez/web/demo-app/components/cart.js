const cart = homeView.getElementsByClassName('button--small')


cart.onclick = function (event) {
  event.preventDefault()

  const cartResult = homeView.querySelector('.cartResult')
  cartResult.innerHTML = ''

  const counter = counterCart()

}

// const counts = 0;
// (".button--small").click(function () {
//   counts += +1;
//   (".cart-counter").animate({
//     (this).text(counts)
// });

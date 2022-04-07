const homeOrdersLink = homeView.querySelector('#myLinks #orders')

homeOrdersLink.onclick = event => {
  event.preventDefault()

  const ordersView = homeView.querySelector('.orders')

  //id = undefined

  const feedback = searchForm.querySelector('.feedback')

  feedback.innerText = ''
  //feedback.classList.add('off')

  //homeView.classList.add('off')

  homeView.classList.add('off')
  ordersView.classList.remove('off')
  

}

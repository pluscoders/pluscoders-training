const homeOrdersLink = homeView.querySelector('#myLinks #orders')

homeOrdersLink.onclick = event => {
  event.preventDefault()

  const token = _token

  const ordersView = homeView.querySelector('.orders')

  const feedback = searchForm.querySelector('.feedback')

  feedback.innerText = ''
  //feedback.classList.add('off')

  //homeView.classList.add('off')

  ordersView.classList.remove('off')
  cartView.classList.add('off')

  try{

  } catch {
      
  }

}

const homeOrdersLink = homeView.querySelector('#myLinks #orders')

homeOrdersLink.onclick = event => {
  event.preventDefault()

  const token = _token

  const ordersView = homeView.querySelector('.orders')


  const feedback = searchForm.querySelector('.feedback')

  feedback.innerText = ''
  //feedback.classList.add('off')

  //homeView.classList.add('off')


  try {
    retrieveVehicleOrders(token, ((error, orders) => {
      if (orders.length == 0) {
        error = document.createElement('p')

        resultsView.innerHTML = ''

        error.innerText = 'No vehicles found '

        resultsView.append(error)

        return
      } else if (error == 401) {
        homeView.classList.add('off')
        loginView.classList.remove('off')
      }

      const list = document.createElement('ul')



      orders.forEach(vehicle => {
        const result = document.createElement('li')

        const id = document.createElement('h3')
        const qty = document.createElement('p')
        const name = document.createElement('p')
        const maker = document.createElement('p')
        const image = document.createElement('img')
        image.classList.add('image-detail')
        const addToCartButton = document.createElement('button')
        addToCartButton.classList.add('button--small')
        const removeFromCartButton = document.createElement('button')
        removeFromCartButton.classList.add('button--small')


        id.innerText = `Car ID: ${vehicle.id}`
        qty.innerText = `Quantity: ${vehicle.qty} (${vehicle.price * vehicle.qty} $)`
        maker.innerText = `Brand: ${vehicle.maker}`
        name.innerText = `Name: ${vehicle.name}`
        image.src = vehicle.image
        addToCartButton.innerText = 'Add'
        removeFromCartButton.innerText = 'Remove'


        result.append(id, qty, maker, name, image, addToCartButton, removeFromCartButton)

        list.append(result)
      })


      resultsView.classList.add('off')
      favouritesView.classList.add('off')
      homeView.classList.add('off')
      ordersView.classList.remove('off')
    

   

    }))
  } catch (error) {
    feedback.innerText = error.message

    feedback.classList.remove('off')
  }
  

}


// const checkoutForm = checkoutView.querySelector('form')

// checkoutForm.onsubmit = event => {
//   event.preventDefault()

//   try {
//     retrieveVehicleOrders(token, ((error, orders) => {
//       if (error) return alert(error.message)

//       if (orders.length > 0) {

//         ordersView.innerText = ''

//         orders.forEach(order => {
//           const orders = document.createElement('li')
  
//           const id = document.createElement('h3')
//           const date = document.createElement('p')
//           const cart = document.createElement('p')
  
//           id.innerText = `Car ID: ${order.id}`
//           date.innerText = `Date: ${order.date}`
//           cart.innerText = `Cart: ${order.cart}`

//           orders.append(id, date, cart)

//         })

//       } else {
        
//   }
// }))
// } catch (error) {
// alert(error.message)
// }

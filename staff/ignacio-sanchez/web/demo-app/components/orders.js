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



      orders.forEach(order => {
        const result = document.createElement('li')
        

        const id = document.createElement('h3')
        const date = document.createElement('p')


        id.innerText = `Order ID: ${order.id}`
        date.innerText = `Date: ${order.date}`

        const vehicles = order.cart

        result.append(id, date)

        list.append(result)

        vehicles.forEach(vehicle => {

            const name = document.createElement('p')
            const maker = document.createElement('p')
            const qty = document.createElement('p')
            const image = document.createElement('img')
            image.classList.add('image-detail')
  
            maker.innerText = `Brand: ${vehicle.vehicle.maker}`
            name.innerText = `Name: ${vehicle.vehicle.name}`
            qty.innerText = `Quantity: ${vehicle.qty} (${vehicle.vehicle.price * vehicle.qty} $)`
            image.src = vehicle.vehicle.image

            result.append(name, maker,qty, image)

        })
  
      })


      ordersView.innerHTML = ''

      const title = document.createElement('h2')
      title.innerText = 'Orders'

      ordersView.append(title,list)

      cartView.classList.add('off')
      resultsView.classList.add('off')
      favouritesView.classList.add('off')
      ordersView.classList.remove('off')



    }))
  } catch (error) {
    feedback.innerText = error.message

    feedback.classList.remove('off')
  }


}




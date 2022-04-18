const homeBasketLink = homeView.querySelector('#myLinks #cart')

homeBasketLink.onclick = event => {
  event.preventDefault()

  const token = _token

  const cartView = homeView.querySelector('.cart')
  const resultsView = homeView.querySelector('.results')
  

  const feedback = searchForm.querySelector('.feedback')

  feedback.innerText = ''
  feedback.classList.add('off')

  cartView.classList.remove('off')

  let totalCart = 0


  try {
    retrieveVehiclesFromCart(token, ((error, vehicles) => {
      if (vehicles.length == 0) {
        error = document.createElement('p')

        resultsView.classList.remove('off')

        resultsView.innerHTML = ''

        error.innerText = 'Empty Cart '

        resultsView.append(error)

        return
      } else if (error == 401) {
        homeView.classList.add('off')
        loginView.classList.remove('off')
      }

      const list = document.createElement('ul')

      const totalCartText = document.createElement('p')



      vehicles.forEach(vehicle => {
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


        addToCartButton.onclick = event => {
          event.stopPropagation()

          try {
            addVehicleToCart(_token, vehicle.id, error => {
              if (error) return alert(error.message)

              qty.innerText = `Quantity: ${++vehicle.qty} (${vehicle.price * vehicle.qty} $)`

              totalCart.total = totalCart.total + (vehicle.price)
              totalCart_.innerText = `Total Price: (${totalCart.total} $)`
            })
          } catch (error) {
            alert(error.message)
            feedback.innerText = error.message

            feedback.classList.remove('off')
          }

        }
        removeFromCartButton.onclick = event => {
          event.stopPropagation()

          try {
            removeVehicleFromCart(_token, vehicle.id, error => {
              if (error) return alert(error.message)

              if (vehicle.qty === 1) {
                list.removeChild(result)
                totalCart.total = totalCart.total - (vehicle.price)
                totalCart_.innerText = `Total Price: (${totalCart.total} $)`

                if (totalCart.total === 0) {
                  cartView.removeChild(totalCartText)
                  cartView.removeChild(checkoutButton)
                }
              } else {
                qty.innerText = `Quantity: ${--vehicle.qty} (${vehicle.price * vehicle.qty} $)`
                totalCart.total = totalCart.total - (vehicle.price)
                totalCart_.innerText = `Total Price: (${totalCart.total} $)`

              }

            })
          } catch (error) {
            alert(error.message)
            feedback.innerText = error.message

            feedback.classList.remove('off')
          }

        }

        result.append(id, qty, maker, name, image, addToCartButton, removeFromCartButton)

        list.append(result)
      })

      const totalCart = vehicles.reduce((acc = {}, vehicle = {}) => {
        const itemTotal = (vehicle.price * vehicle.qty);

        acc.total = (acc.total + itemTotal);

        return acc;
      }, {
        total: 0
      });

      const totalCart_ = document.createElement('p')

      const checkoutButton = document.createElement('button')
      checkoutButton.classList.add('button--small_checkout')
      checkoutButton.innerText = 'Proceed with checkout'

      totalCart_.innerText = `Total Price: (${totalCart.total} $)`

      totalCartText.append(totalCart_)

      cartView.innerHTML = ''

      if (totalCart.total == 0) {
        cartView.removeChild(totalCartText)
      } else {
        cartView.append(list, totalCartText, checkoutButton)
      }

      resultsView.classList.add('off')
      favouritesView.classList.add('off')
      cartView.classList.remove('off')

      checkoutButton.onclick = event => {
        event.preventDefault()

        checkoutView.classList.remove('off')
        cartView.classList.add('off')
        homeView.classList.add('off')
      }

      const checkoutForm = checkoutView.querySelector('form')

      checkoutForm.onsubmit = event => {
        event.preventDefault()

        try {
          placeVehiclesOrder(token, ((error, orderId) => {
            if (error) return alert(error.message)

            if (orderId.length > 0) {

              resultsView.innerText = ''

              const idOrder = document.createElement('p')
              
              idOrder.innerText = `The Order with ID  ${orderId} has been created and registered`
              
              resultsView.append(idOrder)

            }


          }))
        } catch (error) {
          alert(error.message)
        }

        checkoutView.classList.add('off')
        homeView.classList.remove('off')
        resultsView.classList.remove('off')
        
      }
      
      
      
      
    }))
  } catch (error) {
    
    error.message = 'Empty Cart'
    
    feedback.innerText = error.message
    
    feedback.classList.remove('off')
  }
  ordersView.classList.add('off')
  favouritesView.classList.add('off')
  
}
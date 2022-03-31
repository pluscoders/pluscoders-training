const homeBasketLink = homeView.querySelector('#myLinks #cart')

homeBasketLink.onclick = event => {
  event.preventDefault()

  const token = _token

  const basketView = homeView.querySelector('.cart')

  //id = undefined

  const feedback = searchForm.querySelector('.feedback')

  feedback.innerText = ''
  //feedback.classList.add('off')

  //homeView.classList.add('off')

  basketView.classList.remove('off')

  let totalCart = 0

  try {
    retrieveVehiclesFromCart(token, ((error, vehicles) => {
      if (vehicles.length == 0) {
        error = document.createElement('p')

        resultsView.innerHTML = ''

        error.innerText = 'No vehicles found '

        resultsView.append(error)

        return
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
        const removeFromCartButton = document.createElement('button')
        addToCartButton.classList.add('button--small')
        removeFromCartButton.classList.add('button--small')


        id.innerText = `Car ID: ${vehicle.id}`
        qty.innerText = `Quantity: ${vehicle.qty} (${vehicle.price * vehicle.qty} $)`
        maker.innerText = `Brand: ${vehicle.maker}`
        name.innerText = `Name: ${vehicle.name}`
        image.src = vehicle.image
        addToCartButton.innerText = 'Add'
        removeFromCartButton.innerText = 'Remove'

        // TODO calculate the total price to pay (HINT use reduce)


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
            //feedback.innerText = error.message

            //feedback.classList.remove('off')
          }

        }
        removeFromCartButton.onclick = event => {
          event.stopPropagation()

          try {
            removeVehicleFromCart(_token, vehicle.id, error => {
              if (error) return alert(error.message)

              if (vehicle.qty === 1) {
                list.removeChild(result)
              } else {
                qty.innerText = `Quantity: ${--vehicle.qty} (${vehicle.price * vehicle.qty} $)`
              }
              
              totalCart.total = totalCart.total - (vehicle.price)
              totalCart_.innerText = `Total Price: (${totalCart.total} $)`

            })
          } catch (error) {
            alert(error.message)
            //feedback.innerText = error.message

            //feedback.classList.remove('off')
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

      totalCart_.innerText = `Total Price: (${totalCart.total} $)`
      
      totalCartText.append(totalCart_)

      basketView.innerHTML = ''

      basketView.append(list, totalCartText)

      resultsView.classList.add('off')
      favouritesView.classList.add('off')

      basketView.classList.remove('off')

    }))
  } catch (error) {
    feedback.innerText = error.message

    feedback.classList.remove('off')
  }
}
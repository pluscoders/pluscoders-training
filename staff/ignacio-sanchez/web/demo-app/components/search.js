const searchForm = homeView.querySelector('form')

searchForm.onsubmit = event => {
  event.preventDefault()

  const resultsView = homeView.querySelector('.results')
  const detailView = homeView.querySelector('.detail')

  //const brand = searchForm.brand.value
  //const model = searchForm.model.value
  const { brand: { value: brand }, model: { value: model } } = searchForm

  try {
    searchVehicles(_token, brand, model, (error, vehicles) => {
      if (vehicles.length === 0) {
        error = document.createElement('p')

        resultsView.innerHTML = ''

        error.innerText = 'No matches found with brand ' + searchForm.brand.value + " and model " + searchForm.model.value

        resultsView.append(error)

        return
      }

      const list = document.createElement('ul')

      vehicles.forEach(vehicle => {
        const item = document.createElement('li')

        const name = document.createElement('h3')
        const thumbnail = document.createElement('img')
        const price = document.createElement('span')
        const cartButton = document.createElement('button')
        const favButton = document.createElement('button')
        cartButton.classList.add('button--small')
        favButton.classList.add('button--small_fav')

        name.innerText = `${vehicle.name} (${vehicle.id})`
        thumbnail.src = vehicle.thumbnail
        price.innerText = `${vehicle.price} $`
        cartButton.innerText = 'Add to cart'
        favButton.innerText = `${vehicle.isFav ? '💜' : '🤍'}`

        cartButton.onclick = event => {
          event.stopPropagation()

          // TODO toggleFavVehicle
          try {
            addVehicleToCart(_token, vehicle.id, error => {
              if (error) return alert(error.message)
            })
          } catch (error) {
            alert(error.message)
            //feedback.innerText = error.message

            //feedback.classList.remove('off')
          }

          // TODO addVehicleToCart
        }

        favButton.onclick = event => {
          event.stopPropagation()

          // TODO toggleFavVehicle
          try {
            toggleFavVehicle(_token, vehicle.id, error => {
              if (error) return alert(error.message)

              favButton.innerText = favButton.innerText === '💜' ? '🤍' : '💜'
            })
          } catch (error) {
            alert(error.message)
            //feedback.innerText = error.message

            //feedback.classList.remove('off')
          }
        }

        item.append(name, thumbnail, price, cartButton, favButton)

        list.append(item)

        item.onclick = event => {
          retrieveVehicle(_token, vehicle.id, (error, vehicle) => {
            if (error) {
              feedback.innerText = error.message

              feedback.classList.remove('off')

              return
            }

            const id = document.createElement('p')
            const name = document.createElement('h3')
            const image = document.createElement('img')
            image.classList.add('image-detail')
            const favButton = document.createElement('button')
            favButton.classList.add('button--small_fav')
            const year = document.createElement('p')
            const color = document.createElement('p')
            const maker = document.createElement('p')
            const collection = document.createElement('p')
            const style = document.createElement('p')
            const description = document.createElement('p')
            const price = document.createElement('p')
            const url = document.createElement('p')

            // TODO add fav button and mechanise toggleFavVehicle

            id.innerText = `Car ID: ${vehicle.id}`
            name.innerText = `Name: ${vehicle.name}`
            image.src = vehicle.image
            favButton.innerText = `${vehicle.isFav ? '💜' : '🤍'}`
            year.innerText = `Year: ${vehicle.year}`
            color.innerText = `Color: ${vehicle.color}`
            maker.innerText = `Brand: ${vehicle.maker}`
            collection.innerText = `Collection: ${vehicle.collection}`
            style.innerText = `Style: ${vehicle.style}`
            description.innerText = `Description: ${vehicle.description}`
            price.innerText = `Price: ${vehicle.price}`
            url.innerText = vehicle.url

            detailView.innerHTML = ''

            favButton.onclick = event => {
              event.stopPropagation()
    
              // TODO toggleFavVehicle
              try {
                toggleFavVehicle(_token, vehicle.id, error => {
                  if (error) return alert(error.message)
    
                  favButton.innerText = favButton.innerText === '💜' ? '🤍' : '💜'
                })
              } catch (error) {
                alert(error.message)
                //feedback.innerText = error.message
    
                //feedback.classList.remove('off')
              }
            }

            detailView.append(id, name, image, favButton, year, color, maker, collection, style, description, price, url)

            resultsView.classList.add('off')

            detailView.classList.remove('off')
          })
        }

      })

      resultsView.innerHTML = ''

      resultsView.append(list)

      detailView.classList.add('off')

      resultsView.classList.remove('off')
    })
  } catch (error) {

    error = document.createElement('p')

    error.innerText = 'No matches found with brand ' + searchForm.brand.value + " and model " + searchForm.model.value

    resultsView.append(error)
  }
  resultsView.classList.remove('off')

}

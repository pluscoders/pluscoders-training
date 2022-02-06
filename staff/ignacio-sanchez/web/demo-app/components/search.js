const searchForm = homeView.querySelector('form')

searchForm.onsubmit = function (event) {
  event.preventDefault()

  const results = homeView.querySelector('.results')
  const detail = homeView.querySelector('.detail')
  results.innerHTML = ''
  detail.innerHTML = ''

  const brand = searchForm.brand.value
  const model = searchForm.model.value

  try {

    searchVehicles(brand, model, ((error, vehicles) => {
      if (error) {
        feedback.innerText = error.message

        feedback.classList.remove('off')

        return
      }

      const list = document.createElement('ul')

      vehicles.forEach(function (car) {
        const result = document.createElement('li')

        const name = document.createElement('h3')
        const thumbnail = document.createElement('img')
        const price = document.createElement('span')
        const button = document.createElement('button')
        button.classList.add('button--small')

        name.innerText = car.name + ' (' + car.id + ')'
        thumbnail.src = car.thumbnail
        price.innerText = car.price + ' $'
        button.innerText = 'Add to basket'

        result.append(name, thumbnail, price, button)

        list.append(result)

        result.onclick = event => {
          retrieveVehicle(car.id, (error, vehicles) => {
            console.log(vehicles)
            // TODO create elements for the detail (h2, img, p, ...) and put them in the container (detail)
            const detailed = document.createElement('li')

            //vehicles.forEach(function (car){

            const id = document.createElement('p')
            const name = document.createElement('h3')
            const image = document.createElement('img')
            const year = document.createElement('p')
            const color = document.createElement('p')
            const maker = document.createElement('p')
            const collection = document.createElement('p')
            const style = document.createElement('p')
            const description = document.createElement('p')
            const price = document.createElement('p')
            const url = document.createElement('p')

            id.innerText = 'Car ID: ' + vehicles.id
            name.innerText = 'Name: ' + vehicles.name
            image.src = vehicles.image
            year.innerText = 'Year: ' + vehicles.year
            color.innerText = 'Color: ' + vehicles.color
            maker.innerText = 'Brand: ' + vehicles.maker
            collection.innerText = 'Collection: ' + vehicles.collection
            style.innerText = 'Style: ' + vehicles.style
            description.innerText = 'Description: ' + vehicles.description
            price.innerText = 'Price: ' + vehicles.price
            url.innerText = vehicles.url

            result.append(id, name, image, year, color, maker, collection, style, description, price, url)

            list.append(result)

            detail.append(list)

            detail.classList.remove('off')

            results.classList.add('off')


            // TODO switch results off, turn detail on
          })
        }
      })

      results.append(list)

    }))

  }

  catch (error) {

    error = document.createElement('p')

    error.innerText = 'No matches found with brand ' + searchForm.brand.value + " and model " + searchForm.model.value

    results.append(error)
  }
    results.classList.remove('off')

}
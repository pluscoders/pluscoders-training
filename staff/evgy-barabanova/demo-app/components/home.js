const searchForm = homeView.querySelector('form')

searchForm.addEventListener('submit', event => {
  event.preventDefault()

  const query = event.target.query.value

  searchVehicles(query)
    .then(vehicles => {
      console.log(vehicles)

      const ul = homeView.querySelector('ul')

      // TODO render vehicles in <li></li> (one for each car)
    })
    .catch(error => console.error(error.message))
})

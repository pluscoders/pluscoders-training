function myFunctionProfile() {
  var x = document.getElementById("myLinksProfile");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    try {
      retrieveVehiclesCountFromCart(_token, (error, count) => {
        if (error) {
          feedback.innerText = 'coult not retrieve cart count'

          feedback.classList.remove('off')

          return
        }
        if (count) {
          cartNumber.classList.remove('off')

          cartNumber.innerText = ` (${count})`

        } else cartNumber.classList.add('off')
      })

    } catch (error) {
      feedback.innerText = error.message
      feedback.classList.remove('off')
    }

    }
}


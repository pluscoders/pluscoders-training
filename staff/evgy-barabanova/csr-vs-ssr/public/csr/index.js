// logic

function authenticateUser(email, password, callback) {
  const xhr = new XMLHttpRequest

  // response

  xhr.addEventListener('load', () => {
    const { status } = xhr

    if (status === 200) {
      const { responseText: json } = xhr

      const payload = JSON.parse(json)

      const { userId } = payload

      callback(null, userId)
    } else if (status === 401) {
      const { responseText: json } = xhr

      const payload = JSON.parse(json)

      const { error: message } = payload

      callback(new Error(message))
    }
  })

  // request

  xhr.open('POST', 'http://localhost:8080/api/users/auth')

  xhr.setRequestHeader('Content-Type', 'application/json')

  const json = JSON.stringify({ email, password })

  xhr.send(json)
}

// view

const loginForm = document.querySelector('loginForm')

loginForm.addEventListener('submit', event => {
  event.preventDefault()

  //const email = loginForm.email.value
  const email = event.target.email.value

  //const password = loginForm.password.value
  const password = event.target.password.value


  authenticateUser(email, password, (error, userId) => {
    if (error) {
      loginForm.style.display = 'none';

      const feeback = document.querySelector('feedback')

      // TODO
    }

    // TODO
  })
})

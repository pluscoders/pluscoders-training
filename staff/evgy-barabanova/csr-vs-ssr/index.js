/* data */

const users = [
  {
    id: 1,
    email: 'evgy@mail.com',
    password: '123123123'
  },
  {
    id: 2,
    email: 'manu@mail.com',
    password: '123123123'
  }
]

/* logic */

function authenticateUser(email, password, callback) {
  const user = users.find(user => user.email === email && user.password === password)

  if (user)
    callback(null, user.id)
  else
    callback(new Error('wrong credentials'))
}

/* server */

const express = require('express')

const server = express()

server.use(express.static('public'))

// Server-Side Rendering (SSR)

server.get('/ssr/login', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SSR</title>
  </head>
  <body>
    <h1>Hello, SSR!</h1>

    <form action="/ssr/login" method="post">
      <input type="email" name="email" placeholder="email">
      <input type="password" name="password" placeholder="password">
      <button>Login</button>
    </form>
  </body>
  </html>`)
})

const formBodyParser = express.urlencoded({ extended: true })

server.post('/ssr/login', formBodyParser, (req, res) => {
  const { body: { email, password }} = req

  authenticateUser(email, password, (error, userId) => {
    if (error) {
      res.send(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR</title>
      </head>
      <body>
        <h1>Hello, SSR!</h1>
    
        <p>${error.message}, try <a href="/ssr/login">again</a></p>
      </body>
      </html>`)

      return
    }

    res.redirect('/ssr/home')
  })
})

server.get('/ssr/home', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SSR</title>
  </head>
  <body>
    <h1>Hello, SSR!</h1>

    <p>Welcome, Home!</p>
  </body>
  </html>`)
})

// JSON API (for Client-Side Rendering (CSR))

const jsonBodyParser = express.json()

server.post('/api/users/auth', jsonBodyParser, (req, res) => {
  const { body: { email, password }} = req

  authenticateUser(email, password, (error, userId) => {
    if (error) {
      res.status(401).json({ error: error.message })

      return
    }

    res.status(200).json({ userId })
  })
})

server.listen(8080)

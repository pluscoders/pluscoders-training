import React from 'react'
import { Link } from "react-router-dom"
import './Login.css'

export default function Login() {

  const handleLogin = async event => {
    event.preventDefault();

    const username = event.target.username.value
    const password = event.target.password.value

    const response = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users/auth', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        "username": username,
        "password": password,
      })
    })

    const { status } = response

    if (status === 200) {
      // TODO get the token and go to home

      const { token } = await response.json()

      sessionStorage.token = token

      // TODO navigate to home (useNavigate)
    } else if (status >= 400 && status < 500) {
      // TODO get the error and show it (alert)

      const { error } = await response.json()

      alert(error.messsage)
    } else if (status >= 500) {
      // TODO show "server error" message (alert)

      alert('server error')
    }
  }



  return (
    <main className='Login'>
      <h1>Login</h1>
      <form className='Login__form' onSubmit={handleLogin}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Login</button>
        <Link to="/register">Register</Link>
      </form>
    </main>
  )
}

import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import './Login.css'

export default function Login() {

  const navigate = useNavigate()

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
      const { token } = await response.json()

      sessionStorage.token = token

      navigate('/')
    } else if (status >= 400 && status < 500) {
      const { error } = await response.json()

      alert(error)
    } else if (status >= 500) {
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

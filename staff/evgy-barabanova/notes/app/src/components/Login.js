import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {

  const navigate = useNavigate()

  const handleLogin = async event => {
    event.preventDefault();

    const username = event.target.username.value
    const password = event.target.password.value

    const response = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users/auth', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        'username': username,
        'password': password,
      })
    })

    const { status } = response

    if (status === 200) {
      const payload = await response.json() // NOTE we convert the response JSON body (payload) to object

      const { token } = payload // NOTE we destructure the token from the payload object

      sessionStorage.token = token // NOTE we keep the token in the session storage. this storage is in the browser, it is persistent, it is kept there even if we refresh the page. only if we close the window (tab) then we lose the information.

      navigate('/')
    } else if (status >= 400 && status < 500) {
      const payload = await response.json()

      const { error } = payload

      alert(error)
    } else if (status >= 500) {
      alert('server error')
    }
  }



  return (
    <main className='Login'>
      <h1>Login</h1>
      <form className='Login__form' onSubmit={handleLogin}>
        <input type='text' name='username' placeholder='username' />
        <input type='password' name='password' placeholder='password' />
        <button type='submit'>Login</button>
        <Link to='/register'>Register</Link>
      </form>
    </main>
  )
}

import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = async event => {
    event.preventDefault();

    const name = event.target.name.value
    const username = event.target.username.value
    const password = event.target.password.value

    const response = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'username': username,
        'password': password,
      })
    })

    const { status } = response

    if (status === 201) {
      navigate('/login')
    } else if (status >= 400 && status < 500) {
      const payload = await response.json()

      const { error } = payload

      alert(error)
    } else if (status >= 500) {
      alert('server error')
    }
  }

  return (
    <main className='Register'>
      <h1>Register</h1>
      <form className='Register__form' onSubmit={handleRegister}>
        <input type='text' name='name' placeholder='name' />
        <input type='text' name='username' placeholder='username' />
        <input type='password' name='password' placeholder='password' />
        <button type='submit'>Register</button>
        <Link to='/login'>Login</Link>
      </form>
    </main>
  )
}

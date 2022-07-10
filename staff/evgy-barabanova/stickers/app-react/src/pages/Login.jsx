import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
import { authenticateUser } from "../logic"

export default function Login() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value

    try {
      authenticateUser(email, password)
        .then(token => {
          sessionStorage.token = token
          
          navigate('/home')
        })
        .catch(error => alert(error.message))
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Enter youremail"
        />
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/">back</Link>
    </div>
  )
}

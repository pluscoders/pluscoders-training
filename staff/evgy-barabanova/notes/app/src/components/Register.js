import React from "react";
import {Link} from "react-router-dom"
import './Register.css'

export default function Register() {
  return (
    <main className="Register">
      <h1>Register</h1>
      <form className="Register__form">
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Register</button>
        <Link to="/login">Login</Link>
      </form>
    </main>
  )
}

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { authenticateUser } from "../logic";

export default function Login() {
  const navigate = useNavigate();

  const handleAuthenticateUser = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      authenticateUser(email, password)
        .then((token) => {
          sessionStorage.token = token;

          navigate("/home");
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main className="login-page-main">
      <h1>Login</h1>
      <form className="login-page-form" onSubmit={handleAuthenticateUser}>
        <label for="email">Email</label>
        <input name="email" type="email" placeholder="Enter your email" />
        <div className="register-page-password"></div>
        <label for="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <button className="login-page-button" type="submit">
          Login
        </button>
      </form>
      <Link className="link" to="/">
        back
      </Link>
    </main>
  );
}

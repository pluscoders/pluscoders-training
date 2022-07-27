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
    <main class="login-page-main">
      <h1>Login</h1>
      <form class="login-page-form" onSubmit={handleAuthenticateUser}>
        <label for="email">Email</label>
        <input name="email" type="email" placeholder="Enter your email" />
        <div class="register-page-password"></div>
        <label for="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <button class="login-page-button" type="submit">
          Login
        </button>
      </form>
      <Link className="link" to="/">
        back
      </Link>
    </main>
  );
}

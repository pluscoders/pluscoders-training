import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { registerUser } from "../logic";

export default function Register() {
  const navigate = useNavigate();

  const handleRegisterUser = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      registerUser(name, email, password)
        .then(() => navigate("/login"))
        .catch((error) => {
          debugger;
          alert(error.message);
        });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main class="register-page-main">
      <h1>Register here</h1>
      <form class="register-page-form" onSubmit={handleRegisterUser}>
        <div class="register-page-name"> Name</div>
        <input name="name" type="text" placeholder="Enter your name" />
        <div class="register-page-email"> Email</div>
        <input name="email" type="email" placeholder="Enter your email" />
        <div class="register-page-password"> Password</div>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <button class="register-page-button" type="submit">
          Register
        </button>
      </form>
        <Link className="link" to="/">back</Link>
    </main>
  );
}

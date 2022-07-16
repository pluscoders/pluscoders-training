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
    <div className="Register">
      <h1>Register</h1>
      <div className="image">
        <img src="images/login 1.png" alt="login" />
      </div>
      <form onSubmit={handleRegisterUser}>
        <div className="name">
        <input name="name" type="text" placeholder="Enter your name" />
        </div>
        <div className="email">
        <input name="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="password">
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        </div>
        
        <button type="submit">Register</button>
      </form>
      <Link to="/">back</Link>
    </div>
  );
}

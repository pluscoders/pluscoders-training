import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [items, setItems] = useState([]);
  const [inputs, setInputs] = useState({});

  const addHandler = (e) => {
    axios
      .post("http://localhost:5000/users/auth", {
        email: inputs.email,
        password: inputs.password,
      })
      .then((loginUser) => {
        //console.log('newSer', newUser);
        // const {email, password} = loginUser.data.post
      });
    setInputs({});
  };

  const inputsHandler = (e) => {
    console.log(e.target.value);
    // setInputs(pre => ({...pre, [e.target.name]: e.target.value}))
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <form>
        <input
          name="username"
          type="username"
          placeholder="Enter your username"
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
  );
}

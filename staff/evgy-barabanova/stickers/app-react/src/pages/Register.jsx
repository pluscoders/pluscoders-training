import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [items, setItems] = useState([]);
  const [inputs, setInputs] = useState({});

  const addHandler = (e) => {
    axios
      .post("http://localhost:5000/users", {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .then((newUser) => {
        //console.log('newSer', newUser);
        // const {name, email, password} = newUser.data.post
      });
    setInputs({});
  };

  const inputsHandler = (e) => {
    console.log(e.target.value);
    // setInputs(pre => ({...pre, [e.target.name]: e.target.value}))
  };

  return (
    <div className="Register">
      <h1>Register</h1>
      <form>
        <input name="name" type="text" placeholder="Enter your name" />
        <input name="email" type="email" placeholder="Enter your email" />
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <button type="submit">Register</button>
      </form>
      <Link to="/">back</Link>
    </div>
  );
}

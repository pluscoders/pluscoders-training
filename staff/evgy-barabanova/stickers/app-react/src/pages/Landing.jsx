import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="Landing">
      <h1 className="text__title">Welcome</h1>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

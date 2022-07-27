import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <main className="landing-page-main">
      <h1>Welcome</h1>
        <Link className="link" to="/register">Register</Link>
        <Link className="link" to="/login">Login</Link>
    </main>
  );
}

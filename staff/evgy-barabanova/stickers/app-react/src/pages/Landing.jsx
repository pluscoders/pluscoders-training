import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <main className="landing-page-main">
      <h1>Welcome</h1>
      <div className="landing-page-link">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </main>
  );
}

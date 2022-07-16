import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="Landing">
      <div className="element__top"></div>
      <h1 className="text__title">Welcome</h1>
      <div className="image">
        <img src="images/undraw_welcoming_re_x0qo 1.png" alt="welcome" />
      </div>
      <div className="link__reg">
        <Link to="/register">Register</Link>
      </div>
      <div className="link__log">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

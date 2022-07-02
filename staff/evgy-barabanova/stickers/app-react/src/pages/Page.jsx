import React from "react";
import { Link } from "react-router-dom";

export default function Page(props) {
  // const children = props.children
  const { children } = props;

  return (
    <div className="Page">
      <Link to="/">😊</Link>

      {children}
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pages/Signup">Sign Up</Link>
        <Link to="/pages/LoginPage">Log In</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

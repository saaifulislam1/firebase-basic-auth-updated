import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

function Header() {
  const {user}= useContext(AuthContext)
  console.log('User', user)
  
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to="/" className="btn btn-ghost normal-case text-xl">Redox Inc</Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>

        <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Header;

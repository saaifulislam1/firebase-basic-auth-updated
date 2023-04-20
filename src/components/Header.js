import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

function Header() {
  const {user, logOut}= useContext(AuthContext)
  console.log('User', user)
  const  handleSignOut = ()=>{
    logOut()
    .then(()=>{console.log('signout completed')})
    .catch(error=>{console.error(error)})


  }
  
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to="/" className="btn btn-ghost normal-case text-xl">Redox Inc</Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">orders</Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>

        <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
        {user?.email && <h1 className="align-items:">{user.email}</h1> }
        {user ?  <button onClick={handleSignOut} className="btn btn-warning ml-2 ">Signout</button> : <Link to="/login"><button  className="btn btn-warning ml-2 ">Login</button></Link>}
       
        
      </div>
    </div>
  );
}

export default Header;

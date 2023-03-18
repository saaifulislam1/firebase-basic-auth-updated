import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

function Register() {
  const {createUser}= useContext(AuthContext)
  const handleSubmit =(event)=>{
    event.preventDefault();
    const form = event.target;
    const name=form.name.value
    const email= form.email.value;
    const password= form.password.value
    console.log(email,password, name)

    createUser(email, password)
    .then (result =>{
      let user =result.user
      console.log('Registered User', user)
    })
    .catch(error=>{
      console.error(error)
    })
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Register </h1>
      <p className="py-6 text-center">Fill all the information to login now!</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='name' type="text"required placeholder="name" className="input input-bordered" />
        </div>




        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email"required placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' required type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link to="/login" className="label-text-alt link link-hover">Alread have an account ?Login now</Link>
            
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Register
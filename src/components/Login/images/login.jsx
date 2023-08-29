import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import './login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigation("/")
    }
  })
  async function login() {
    console.warn(email, password)

    let item = { email, password }
    let result = await fetch("http://52.66.191.213:5000/api/front/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)

    }
    );

    result = await result.json();
    console.warn(result, result)
    const token = JSON.stringify(result);

    localStorage.setItem("token", token)
    navigation("/")

  }

  return (
    <div className="container ">
      <div className="row">
        <div className="col-lg-6 mt-5">
          <img className="group-img" src="group.png" alt="" />
        </div>
        <div className=" col-lg-6">
          <img className="pink-img" src="pink.png" alt="" />
          <h1 className="heading d-flex justify-content-center ">Welcome Back !</h1>
          <div className="row d-flex justify-content-center">

            <input type="text" className="input mt-5 w-75" onChange={(e) => setEmail(e.target.value)} placeholder="Username" />
            <input type="password" className="input mt-5 w-75" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </div>
          <div className="d-flex justify-content-end">
            <NavLink to="/forgot" className="forgot me-5" >Forgot Password ?</NavLink>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto mt-4">
            <button type="button" onClick={login} class="btn">LOG IN</button>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <div className="div1 me-2"></div>
            <div>or</div>
            <div className="div1 ms-2"></div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <img src="google.png" alt="" />
            <NavLink to="/" className="sign ms-2" >Sign in with Google</NavLink>
          </div>
          <div className="d-flex justify-content-center mt-2 ">
            New Here?
            <NavLink to="/Register" className="register ms-1" >Register</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login

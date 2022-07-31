import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="container-fluid text-center">
      <div className="row content">
        <div className="col-sm-4 sidenav">
          <h2 className="welcome">Globetech Company Limited</h2>
          <p className="make text-center">
            Make yourself digitalized & more effecient
          </p>
          {/* <FontAwesomeIcon icon="fa-solid fa-caret-left" /> */}
          <Link to="/" style={{ "text-decoration": "none" ,"color":"white"}}>
         <span style={{ "font-size": "48px", color: "white" }}>
         <i class="fa-solid fa-caret-left"></i>
         </span>
          </Link>
          {/* <span style={{ "font-size": "48px", color: "white" }}>
          <i class="fa-solid fa-arrow-up-from-square"></i>
          </span> */}
        </div>
        <div className="col-sm-8 text-left rightnav">
        <div class="login-page">
  <div class="form">
    <h1 className="welcome2 text-center">WELCOME</h1>
    <p className="signIn">Sign in to your account</p>
    <form class="login-form">
      <input type="text" placeholder="Email"/>
      <input type="password" placeholder="Password"/>
      <button>login</button>
    </form>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Login;

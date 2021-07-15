import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import Joi from "joi";
import { useState } from "react";
import LoginFacebook from './../../components/LoginFacebook';
import LoginGoogle from './../../components/LoginGoogle';
import axios from "axios";


function SignIn() {


  const [errors, setErrors] = useState({email:"",password:"",loginInvalid:"",credentialsInvalid:""});





  const schema = {
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: false,
    }).required(),
    password: Joi.string().required()

  };

   const validateEmail = (e)=>{
     let myData = {...credentials}
     myData.email = e.target.value
     setCredentials(myData)
    const validate =schema.email.validate(e.target.value)
    let myErrors = {...errors};
    myErrors.email = validate.error?validate.error.details[0].message:null;
    setErrors(myErrors)
    console.log(validate)


   }

   const validatePassword = (e)=>{
    let myData = {...credentials}
    myData.password = e.target.value
    setCredentials(myData)
   const validate =schema.password.validate(e.target.value)
   let myErrors = {...errors};
   myErrors.password = validate.error?validate.error.details[0].message:null;
   setErrors(myErrors)
   console.log(validate)

  }


   const login =async ()=>{
    if(!schema.password.validate(credentials.password).error && !schema.email.validate(credentials.email).error){
      try{
    const {data} = await axios.post("api/user/login",credentials);
    console.log(data)
    const token = data.token
    window.localStorage.setItem("token",token)
  }catch(error){
    console.log("here")
     let myErrors = {...errors}
      myErrors.loginInvalid = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
      myErrors.credentialsInvalid="";
      setErrors(myErrors)
      console.log(myErrors.loginInvalid)
  }
   }
   else{
    let myErrors = {...errors}
    myErrors.credentialsInvalid = "Please enter valid info at all fields"
    setErrors(myErrors)
    console.log(myErrors.credentialsInvalid)
   }
  }


  return (
    <>
      <div className="container-fluid bg-img">
        <div className=" row justify-content-center  align-content-center">
          <div className="box col-lg-4 col-md-8 mb-3 mt-5">
          {errors.loginInvalid && (
                  <div className="alert alert-danger d-block mt-4 theme-border">
                    {errors.loginInvalid}
                  </div>
                )}
                {errors.credentialsInvalid && (
                  <div className="alert alert-danger d-block mt-4 theme-border">
                    {errors.credentialsInvalid}
                  </div>
                )}
            <form className="px-4 py-1 ">
              <div className="form-group mt-5">
                <label htmlFor="login-email">Email address</label>
                <input
                  type="email"
                  className="form-control theme-border"
                  id="login-email"
                  placeholder="email@example.com"
                  value={credentials.email}
                  onChange={validateEmail}
                />
              </div>

              {errors.email && (<div className="alert alert-danger theme-border">{errors.email}</div>)}


              <div className="form-group ">
                <label htmlFor="login-pss">Password</label>
                <input
                  type="password"
                  className="form-control theme-border"
                  id="login-pass"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={validatePassword}
                />
              </div>

              {errors.password && (<div className="alert alert-danger theme-border">{errors.password}</div>)}



              <div className="form-group p-2">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember-me-check"
                  />

                  <label
                    className="form-check-label"
                    htmlFor="remember-me-check"
                  >
                    Remember me
                  </label>
                </div>
                <button

                  type="button"

                  className="btn btn-danger btn-submit mx-2 px-4 py-3 mb-1 mt-2 theme-border font-weight-normal"
                  onClick={login}
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="dropdown-divider p-1"></div>
            <div className="col-md-12  mb-3">
            <LoginFacebook/>
            <LoginGoogle/>

{/* 
              <button className="form-control theme-border btn mb-2 fb-btn font-weight-normal">
                <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                Sign In with Facebook
              </button>
              <button className="form-control theme-border btn google-btn mb-2 font-weight-normal">
                <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                Sign In With Google
              </button> */}

            </div>

            <div className="dropdown-divider p-1"></div>
            <p className="text-inverse text-center">
              New User?{" "}
              <Link to="/signup" data-abc="true">
                Sign Up
              </Link>
            </p>
            <p className="text-inverse text-center mb-2">
              <Link
                className="active"
                to="<?= base_url() ?>auth/login"
                data-abc="true"
              >
                Forgot Password ?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignIn;

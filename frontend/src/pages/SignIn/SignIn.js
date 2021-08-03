import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import Joi from "joi";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../store/actions/UserActions";
import LoginFacebook from "../../components/LoginFacebook";
import LoginGoogle from "../../components/GoogleLogin/LoginGoogle";

function SignIn(props) {

  const handleEnter = event => {
    if (event.keyCode === 13) {
      event.preventDefault();
      login();
    }
  };

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const registerData = useSelector((state) => state.registerData);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    loginInvalid: "",
    credentialsInvalid: "",
  });
  const [credentials, setCredentials] = useState({ email: registerData.info ? registerData.info.email : "", password: "" });



  const schema = {
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: false,
      })
      .required().messages({
        "string.email": `Please enter a valid email`,
        "string.empty": `Email is required`,
      }),
    password: Joi.string().required().messages({
      "string.empty": `Password is required`,
    }),
  };

  const validateEmail = (e) => {
    let myData = { ...credentials };
    myData.email = e.target.value;
    setCredentials(myData);
    const validate = schema.email.validate(e.target.value);
    let myErrors = { ...errors };
    myErrors.email = validate.error ? validate.error.details[0].message : null;
    setErrors(myErrors);

  };

  const validatePassword = (e) => {
    let myData = { ...credentials };
    myData.password = e.target.value;
    setCredentials(myData);
    const validate = schema.password.validate(e.target.value);
    let myErrors = { ...errors };
    myErrors.password = validate.error
      ? validate.error.details[0].message
      : null;
    setErrors(myErrors);

  };

  const login = () => {
    const myErrors = { ...errors }
    myErrors.credentialsInvalid = "";
    setErrors(myErrors)
    if (
      !schema.password.validate(credentials.password).error &&
      !schema.email.validate(credentials.email).error
    ) {
      dispatch(Login(credentials));
    } else {
      let myErrors = { ...errors };
      myErrors.credentialsInvalid = "Please enter valid info at all fields";
      setErrors(myErrors);
    }
  };
  useEffect(() => {
    if (userLogin.success === true) {
      userLogin.info.userRole === 'USER' ? props.history.push(`/`) : props.history.push(`/dashboard`);
    }
  });



  return (
    <>
      <div className="container-fluid pb-5">
        <div className=" row justify-content-center  align-content-center">
          <div className="box col-lg-4 col-md-8 mb-3 mt-5">
            <div className="d-flex justify-content-center">
              <p className="text-inverse text-center mt-4 border alert-danger p-2 theme-border w-75">
                New User?{" "}
                <Link to="/signup" data-abc="true">
                  Sign Up
                </Link>
              </p>
            </div>

            {userLogin.error && (
              <div className="alert alert-danger d-block mt-4 theme-border">
                {userLogin.error}
              </div>
            )}
            {errors.credentialsInvalid && (
              <div className="alert alert-danger d-block mt-4 theme-border">
                {errors.credentialsInvalid}
              </div>
            )}
            <form className="px-4 py-1 ">
              <div className="form-group mt-3 mb-4">
                <label htmlFor="login-email">Email address</label>
                <input
                  type="email"
                  className="form-control theme-border"
                  id="login-email"
                  placeholder="email@example.com"
                  value={credentials.email}
                  onChange={validateEmail}
                  onKeyUp={handleEnter}
                />
              </div>


              {errors.email && (
                <div className="alert alert-danger theme-border">
                  {errors.email}
                </div>
              )}



              <div className="form-group  mt-4 mb-4">
                <label htmlFor="login-pss">Password</label>
                <input
                  type="password"
                  className="form-control theme-border"
                  id="login-pass"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={validatePassword}
                  onKeyUp={handleEnter}
                />
              </div>


              {errors.password && (
                <div className="alert alert-danger theme-border">
                  {errors.password}
                </div>
              )}


              <div className="form-group p-2">
                {/* <div className="form-check">
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
                </div> */}
                <div className="text-center">
                  <button

                    type="button"

                    className="btn btn-danger btn-submit mx-2 px-4 py-3 mb-2 mt-3 theme-border font-weight-normal"
                    onClick={login}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
            <div className="dropdown-divider p-1"></div>
            <div className="col-md-12  mb-5">
              <LoginFacebook />
              <LoginGoogle />

              
              {/* <button className="form-control theme-border btn mb-2 fb-btn font-weight-normal">
                <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                Sign In with Facebook
              </button>
              <button className="form-control theme-border btn google-btn mb-2 font-weight-normal">
                <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                Sign In With Google
              </button>  */}
            </div>

            {/* <div className="dropdown-divider p-1"></div> */}

            <p className="text-inverse text-center mb-4">
              <Link
                className="active"
                to="/sendresetemail"
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

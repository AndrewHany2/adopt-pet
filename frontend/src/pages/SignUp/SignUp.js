import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import Joi from "joi";
import LoginFacebook from './../../components/LoginFacebook';
import LoginGoogle from './../../components/LoginGoogle';

function SignUp() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    passwordObj: { password: "", repeatPassword: "" },
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    password: "",
    repeatPassword: "",
  });

  const schema = {
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: false,
      })
      .required(),
    firstName: Joi.string().alphanum().min(3).max(30).required(),
    lastName: Joi.string().alphanum().min(3).max(30).required(),
    phone: Joi.string()
      .length(11)
      .pattern(/^(010|012|011|015)[0-9]{8}$/)
      .required(),
  };

  const passwordSchema = Joi.object({
    password: Joi.string()
      .min(8).max(30)
      .pattern(
        new RegExp(
          "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})"
        )
      )
      .messages({
        "any.only": `password didn't match`,
        "string.base": `password should contain Capital, Small letters and Special Char`,
        "string.min": `should have a minimum length of {#limit}`,
        "string.pattern.base": `Password Must Contain Captial and Small Letters`,
        "string.max": `should have a maximum length of {#limit}`,
      }),
    repeatPassword: Joi.any().equal(Joi.ref("password")).messages({
      "any.only": `password didn't match`,
    }),
  //  password: Joi.string()
  //   .min(8).max(30)
  //   .pattern(
  //     new RegExp(
  //       "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})"
  //     )
  //   ).error(errors => {
  //     errors.forEach(err => {
  //       switch (err.code) {
  //         case "any.only":
  //           err.message = "value not allowed";
  //           break;
  //         case "string.min":
  //           err.message = `Value should have at least ${err.local.limit} characters!`;
  //           break;
  //           case "string.max":
  //           err.message = `Value should have at most ${err.local.limit} characters!`;
  //           break;
  //         case "string.pattern.base":
  //           err.message = `Password Must Contain Captial, Small Letters and Special Characters`;
  //           break;
  //         default:
  //           break;
  //       }
  //     });
  //     return errors;
  //   }),
  });

  const validatePassword = (e) => {
    let value = e.target.id;

    let myData = { ...userInfo };
    myData.passwordObj[value] = e.target.value;
    setUserInfo(myData);
    const validate = passwordSchema.validate(myData.passwordObj);
    let myErrors = { ...errors };
    myErrors["password"] = validate.error
      ? validate.error.details[0].message
      : null;
    setErrors(myErrors);
    console.log(validate);
  };
  const validateFields = (e) => {
    let value = e.target.id;

    let myData = { ...userInfo };
    myData[value] = e.target.value;
    setUserInfo(myData);
    const validate = schema[value].validate(e.target.value);
    let myErrors = { ...errors };
    myErrors[value] = validate.error ? validate.error.details[0].message : null;
    setErrors(myErrors);
  };

  return (
    <>
      <div className="container-fluid bg-img">
        <div className="row justify-content-center  align-content-center">
          <div className="col-12 col-md-7 box mt-5 px-lg-5">
            <form>
              <div className="form-row mt-4 mr-3 ml-3 pt-5 pb-2">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    className="form-control theme-border"
                    id="firstName"
                    required
                    value={userInfo.firstName}
                    onChange={validateFields}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    className="form-control theme-border"
                    id="lastName"
                    required
                    value={userInfo.lastName}
                    onChange={validateFields}
                  />
                </div>
                {errors.firstName && (
                  <div className="alert alert-danger">{errors.firstName}</div>
                )}
                {errors.lastName && (
                  <div className="alert alert-danger">{errors.lastName}</div>
                )}
              </div>
              <div className="form-row mr-3 ml-3 pb-2">
                <div className="col-12 mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control theme-border"
                    id="email"
                    placeholder="email@example.com"
                    value={userInfo.email}
                    onChange={validateFields}
                  />
                </div>
              </div>
              {errors.email && (
                <div className="alert alert-danger">{errors.email}</div>
              )}
              <div className="form-row mr-3 ml-3 pb-2">
                <div className="col-12 mb-3">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="phone"
                    className="form-control theme-border"
                    id="phone"
                    value={userInfo.phone}
                    onChange={validateFields}
                  />
                </div>
                {errors.phone && (
                  <div className="alert alert-danger">{errors.phone}</div>
                )}
              </div>
              <div className="form-row mr-3 ml-3 pb-2">
                <div className="col-md-6 mb-3">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    className="form-control theme-border"
                    id="country"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    className="form-control theme-border"
                    id="city"
                    required
                  />
                </div>
              </div>

              <div className="form-row mr-3 ml-3">
                <div className="col-md-6 mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control theme-border"
                    id="password"
                    required
                    value={userInfo.password}
                    onChange={validatePassword}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="repeatPassword">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control theme-border"
                    id="repeatPassword"
                    required
                    value={userInfo.repeatPassword}
                    onChange={validatePassword}
                  />
                </div>
                {errors.password && (
                  <div className="alert alert-danger">{errors.password}</div>
                )}
                {errors.repeatPassword && (
                  <div className="alert alert-danger">
                    {errors.repeatPassword}
                  </div>
                )}
              </div>
              <div className="form-group ml-4">
                <div className="form-check">
                  <input
                    className="form-check-input theme-border"
                    type="checkbox"
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-danger btn-submit mx-2 px-4 py-3 mb-1 mt-2 theme-border font-weight-normal"
                >
                  Sign Up
                </button>{" "}
              </div>
            </form>
            <div className="dropdown-divider p-1 "></div>
            <div className="row mr-3 ml-3">
              <div className="col-12 col-lg-6">
              <LoginFacebook/>


                {/* <button className="form-control theme-border btn fb-btn font-weight-normal">
                  <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                  Sign Up with Facebook
                </button> */}
              </div>
              <div className="col-12 col-lg-6  mb-3">
              <LoginGoogle/>

                {/* <button className="form-control theme-border btn google-btn font-weight-normal">
                  <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                  Sign Up With Google
                </button> */}
               </div>
            </div>
            <div className="dropdown-divider p-1 "></div>
            <p className="text-inverse text-center">
              Already have an account?{" "}
              <Link to="/signin" data-abc="true">
                Login
              </Link>
            </p>
            <p className="text-inverse text-center mb-5">
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
export default SignUp;

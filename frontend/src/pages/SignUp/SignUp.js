import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import LoginFacebook from "./../../components/LoginFacebook";
import LoginGoogle from "./../../components/LoginGoogle";
import { useState } from "react";
import Joi from "joi";
import axios from "axios";

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
    formValid: "",
    registerFailed: "",
  });

  const fullSchema = Joi.object({
    firstName: Joi.string().alphanum().min(3).max(30).required().messages({
      "string.min": `should have a minimum length of {#limit}`,
      "string.max": `should have a maximum length of {#limit}`,
    }),

    lastName: Joi.string().alphanum().min(3).max(30).required(),

    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: false,
      })
      .required(),

    phone: Joi.string()
      .length(11)
      .pattern(/^(010|012|011|015)[0-9]{8}$/)
      .required()
      .messages({
        "string.pattern.base": `Please enter a valid mobile phone number`,
        "string.length": `Please enter 11 numbers`,
      }),
  });
  const schema = {
    firstName: Joi.string().alphanum().min(3).max(30).required().messages({
      "string.min": `should have a minimum length of {#limit}`,
      "string.max": `should have a maximum length of {#limit}`,
    }),

    lastName: Joi.string().alphanum().min(3).max(30).required(),

    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: false,
      })
      .required(),

    phone: Joi.string()
      .length(11)
      .pattern(/^(010|012|011|015)[0-9]{8}$/)
      .required()
      .messages({
        "string.pattern.base": `Please enter a valid mobile phone number`,
        "string.length": `Please enter 11 numbers`,
      }),
  };
  const passwordSchema = Joi.object({
    password: Joi.string()
      .min(8)
      .max(30)
      .pattern(
        new RegExp(
          "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})"
        )
      )
      .messages({
        "any.only": `password didn't match`,

        "string.min": `should have a minimum length of {#limit}`,
        "string.pattern.base": `Password Must contain captial and small Letters`,
        "string.length": `should have a maximum length of {#limit}`,
      }),
    repeatPassword: Joi.any().equal(Joi.ref("password")).messages({
      "any.only": `Confirm password didn't match`,
    }),
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
    console.log(validate);
  };

  const sendData = async () => {
    const myData = { ...userInfo };
    const myPassword = myData.passwordObj;
    delete myData.passwordObj;
    delete myData.city;
    delete myData.country;
    console.log(myData);
    if (
      !fullSchema.validate(myData).error &&
      !passwordSchema.validate(myPassword).error
    ) {
      try {
        const { data } = await axios.post("api/user/register", userInfo);
        console.log(data);
      } catch (error) {
        let myErrors = { ...errors };
        myErrors.registerFailed =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        myErrors.credentialsInvalid = "";
        setErrors(myErrors);
        console.log(myErrors.registerFailed);
      }
    } else {
      let myErrors = { ...errors };
      myErrors.formValid = "Please enter valid info at all fields";
      setErrors(myErrors);
      console.log(myErrors.formValid);
    }
  };


  return (
    <>
      <div className="container-fluid bg-img">
        <div className="row justify-content-center  align-content-center">
          <div className="col-12 col-md-7 box mt-5 px-lg-5">
            {errors.formValid && (
              <div className="alert alert-danger d-block mt-5 theme-border">
                {errors.formValid}
              </div>
            )}
            {errors.registerFailed && (
              <div className="alert alert-danger d-block mt-5 theme-border">
                {errors.registerFailed}
              </div>
            )}
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

                  <div className="alert alert-danger d-block theme-border">
                    {errors.firstName}
                  </div>
                )}
                {errors.lastName && (
                  <div className="alert alert-danger d-block theme-border">
                    {errors.lastName}
                  </div>

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

                <div className="alert alert-danger theme-border">{errors.email}</div>
              )}
              <div className="form-row mr-3 ml-3 pb-2">
                <div className="col-12 mb-3">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="number"

                    className="form-control theme-border"
                    id="phone"
                    value={userInfo.phone}
                    onChange={validateFields}
                  />
                </div>
                {errors.phone && (

                  <div className="alert alert-danger theme-border">{errors.phone}</div>

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
                    value={userInfo.repeatPassword}
                    onChange={validatePassword}
                  />
                </div>
                {errors.password && (
                  <div className="alert alert-danger theme-border">
                    {errors.password}
                  </div>
                )}
                {errors.repeatPassword && (
                  <div className="alert alert-danger theme-border">
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
                  />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                  </label>
                </div>
                <button
                  type="button"
                  className="btn btn-danger btn-submit mx-2 px-4 py-3 mb-1 mt-2 theme-border font-weight-normal"
                  onClick={sendData}
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="dropdown-divider p-1 "></div>
            <div className="row mr-3 ml-3">
              <div className="col-12 col-lg-6">
                <LoginFacebook />

                {/* <button className="form-control theme-border btn fb-btn font-weight-normal">
                  <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                  Sign Up with Facebook
                </button> */}
              </div>
              <div className="col-12 col-lg-6  mb-3">
                <LoginGoogle />

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

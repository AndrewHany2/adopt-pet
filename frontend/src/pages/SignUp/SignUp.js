import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import LoginFacebook from "./../../components/LoginFacebook";
import LoginGoogle from "./../../components/LoginGoogle";
import { useState } from "react";
import Joi from "joi";

import { useDispatch, useSelector } from "react-redux";

import { RegisterUser } from "../../store/actions/UserActions";

function SignUp(props) {
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.registerData);


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
    firstName: Joi.string().alphanum().min(3).max(30).required(),

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
      .required(),
    country: Joi.string().required(),
    city: Joi.string().required(),
  });
  const schema = {
    firstName: Joi.string().alphanum().min(3).max(30).required().messages({
      "string.min": `First name should have a minimum length of {#limit}`,
      "string.max": `First name should have a maximum length of {#limit}`,
      "string.empty": `First name is required`,
    }),

    lastName: Joi.string().alphanum().min(3).max(30).required().messages({
      "string.min": `Last name should have a minimum length of {#limit}`,
      "string.max": `Last name should have a maximum length of {#limit}`,
      "string.empty": `Last name is required`,
    }),

    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: false,
      })
      .required()
      .messages({
        "string.email": `Please enter a valid email`,
        "string.empty": `Email is required`,
      }),

    phone: Joi.string()
      .length(11)
      .pattern(/^(010|012|011|015)[0-9]{8}$/)
      .required()
      .messages({
        "string.pattern.base": `Please enter a valid mobile phone number`,
        "string.length": `Please enter 11 numbers`,
        "string.empty": `Phone is required`,
      }),
    country: Joi.string().required().messages({
      "string.empty": `Country is required`,
    }),
    city: Joi.string().required().messages({
      "string.empty": `City is required`,
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

    const wrapData = { ...userInfo };
    delete wrapData.passwordObj;
    wrapData.password = myPassword.password;
    console.log(myData);
    if (
      !fullSchema.validate(myData).error &&
      !passwordSchema.validate(myPassword).error
    ) {
      dispatch(RegisterUser(wrapData));
    } else {
      let myErrors = { ...errors };
      myErrors.formValid = "Please enter valid info at all fields";
      setErrors(myErrors);
      console.log(myErrors.formValid);
    }
  };
  useEffect(() => {
    if (registerData.success === true) {
      props.history.push(`/signin`);
    }
  });

  return (
    <>
      <div className="container-fluid pb-5">
        <div className="row justify-content-center  align-content-center">
          <div className="col-12 col-md-7 box mt-5 px-lg-5">
            {errors.formValid && (
              <div className="alert alert-danger d-block mt-5 theme-border">
                {errors.formValid}
              </div>
            )}
            {registerData.error && (
              <div className="alert alert-danger d-block mt-5 theme-border">
                {registerData.error}
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
                <div className="alert alert-danger theme-border">
                  {errors.email}
                </div>
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
                  <div className="alert alert-danger theme-border">
                    {errors.phone}
                  </div>
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
                    value={userInfo.country}
                    onChange={validateFields}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    className="form-control theme-border"
                    id="city"
                    required
                    value={userInfo.city}
                    onChange={validateFields}
                  />
                </div>
                {errors.country && (
                  <div className="alert alert-danger theme-border">
                    {errors.country}
                  </div>
                )}
                {errors.city && (
                  <div className="alert alert-danger theme-border">
                    {errors.city}
                  </div>
                )}
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
            <p className="text-inverse text-center">
              Already have an account?{" "}
              <Link to="/signin" data-abc="true">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;

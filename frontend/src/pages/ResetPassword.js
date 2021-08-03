import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import { Link } from "react-router-dom";
import Joi from "joi";
import { useState } from "react";
import axios from "axios";



function ResetPassword({match}) {


  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      ResetPassword();
    }
  };

  console.log(match)
  const [errors, setErrors] = useState({ password: "", response: "" });
  const [success, setSuccess] = useState("");

  const [password, setPassword] = useState({password:"", repeatPassword:""});
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

    let myData = { ...password };
    myData[value] = e.target.value;
    setPassword(myData);
    const validate = passwordSchema.validate(myData);
    let myErrors = { ...errors };
    myErrors["password"] = validate.error
      ? validate.error.details[0].message
      : null;
    setErrors(myErrors);

  };

  const resetPasssword = async ()=>{
    const myErrors = { ...errors };
    myErrors.response = "";
    setErrors(myErrors);
    setSuccess("")
    if (!passwordSchema.validate(password).error) {
      try {
        let myResponse = await axios.post(`/api/resetPassword/${match.params.id}/${match.params.token}`,{password:password.password});
        setSuccess(myResponse.data);
      } catch (error) {
        let myErrors = { ...errors };
        myErrors.response = error.response.data;
        setErrors(myErrors)
      }
    } else {
      let myErrors = { ...errors };
      myErrors.email = "Please enter valid Email";
      setErrors(myErrors);
    }
  }

  return (
    <>
      <div className="container-fluid pb-5" style={{ height: "60vh" }}>
        <div className=" row justify-content-center  align-content-center">
          <div className="box col-lg-4 col-md-8 mb-3 mt-5">
            {errors.password && (
              <div className="alert alert-danger d-block mt-4 theme-border">
                {errors.password}
              </div>
            )}
            {errors.response && (
              <div className="alert alert-danger d-block mt-4 theme-border">
                {errors.response}
              </div>
            )}
             {success && (
              <div className="alert alert-primary d-block mt-4 theme-border">
                {success}  <Link to="/signin" data-abc="true">
                  Sign In
                </Link>
              </div>
            )}
            <form className="px-4 py-1 ">
              <div className="form-group mt-3 mb-4">
                <label htmlFor="login-email">Password</label>
                <input
                  type="password"
                  className="form-control theme-border"
                  id="password"
                  value={password.password}
                  onChange={validatePassword}
                  onKeyUp={handleEnter}
                />
              </div>
              <div className="form-group mt-3 mb-4">
                <label htmlFor="login-email">Confirm Password</label>
                <input
                  type="password"
                  className="form-control theme-border"
                  id="repeatPassword"
                  value={password.repeatPassword}
                  onChange={validatePassword}
                  onKeyUp={handleEnter}
                />
              </div>

              <div className="form-group p-2">
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-danger btn-submit mx-2 px-4 py-3 mb-2 mt-3 theme-border font-weight-normal"
                    onClick={resetPasssword}
                  >
                    Reset Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default ResetPassword;

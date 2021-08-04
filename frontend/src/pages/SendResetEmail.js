import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import Joi from "joi";
import { useState } from "react";
import axios from "axios";

function SendResetEmail(props) {
  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      sendEmail();
    }
  };

  const [errors, setErrors] = useState({ email: "", response: "" });
  const [success, setSuccess] = useState("");

  const [email, setEmail] = useState("");

  const schema = {
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
  };

  const validateEmail = (e) => {
    setEmail(e.target.value);
    const validate = schema.email.validate(e.target.value);
    const myErrors = { ...errors };
    myErrors.email = validate.error ? validate.error.details[0].message : null;
    setErrors(myErrors);
  };

  const sendEmail = async () => {
    const myErrors = { ...errors };
    myErrors.response = "";
    setErrors(myErrors);
    setSuccess("")
    if (!schema.email.validate(email).error) {
      try {
        let myResponse = await axios.post("/api/resetPassword", {
          email: email,
        });
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
  };

  return (
    <>
      <div className="container-fluid pb-5" style={{ height: "60vh" }}>
        <div className=" row justify-content-center  align-content-center">
          <div className="box col-lg-4 col-md-8 mb-3 mt-5">
            {errors.email && (
              <div className="alert alert-danger d-block mt-4 theme-border">
                {errors.email}
              </div>
            )}
            {errors.response && (
              <div className="alert alert-danger d-block mt-4 theme-border">
                {errors.response}
              </div>
            )}
            {success && (
              <div className="alert alert-primary d-block mt-4 theme-border">
                {success}
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
                  value={email}
                  onChange={validateEmail}
                  onKeyUp={handleEnter}
                />
              </div>

              <div className="form-group p-2">
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-danger btn-submit mx-2 px-4 py-3 mb-2 mt-3 theme-border font-weight-normal"
                    onClick={sendEmail}
                  >
                    Send Email
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
export default SendResetEmail;

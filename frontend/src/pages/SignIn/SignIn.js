import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function SignIn() {
  return (
    <>
      <div class="container-fluid bg-img">
        <div class=" row justify-content-center  align-content-center">
          <div class="box col-lg-4 col-md-8 mb-3 mt-5">
            <form class="px-4 py-1 ">
              <div class="form-group mt-5">
                <label for="login-email">Email address</label>
                <input
                  type="email"
                  class="form-control theme-border"
                  id="login-email"
                  placeholder="email@example.com"
                />
              </div>
              <div class="form-group ">
                <label for="login-pss">Password</label>
                <input
                  type="password"
                  class="form-control theme-border"
                  id="login-pass"
                  placeholder="Password"
                />
              </div>
              <div class="form-group p-2">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="remember-me-check"
                  />
                  <label class="form-check-label" for="remember-me-check">
                    Remember me
                  </label>
                </div>
                <button
                  type="submit"
                  class="btn btn-danger btn-submit mx-2 px-4 py-3 mb-1 mt-2 theme-border font-weight-normal"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div class="dropdown-divider p-1"></div>
            <div class="col-md-12  mb-3">
              <button class="form-control theme-border btn mb-2 fb-btn font-weight-normal">
                <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                Sign In with Facebook
              </button>
              <button class="form-control theme-border btn google-btn mb-2 font-weight-normal">
                <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                Sign In With Google
              </button>
            </div>

            <div class="dropdown-divider p-1"></div>
            <p class="text-inverse text-center">
              Already have an account?{" "}
              <Link to="<?= base_url() ?>auth/login" data-abc="true">
                Login
              </Link>
            </p>
            <p class="text-inverse text-center mb-2">
              <Link
                class="active"
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

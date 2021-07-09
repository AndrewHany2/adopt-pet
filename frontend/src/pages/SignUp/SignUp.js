import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import React from "react"
import { Link} from "react-router-dom";
import "./SignUp.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'



function SignUp() 
{
return(
<>
<div className="container-fluid bg-img">

    <div className="row justify-content-center  align-content-center">
      <div className="col-12 col-md-7 box mt-5 px-lg-5">
      <form>
        <div className="form-row mt-4 mr-3 ml-3 pt-5 pb-2">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom01">First name</label>
            <input type="text" className="form-control theme-border" id="validationCustom01"  required/>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom02">Last name</label>
            <input type="text" className="form-control theme-border" id="validationCustom02" required/>
          </div>
        </div>
        <div className="form-row mr-3 ml-3 pb-2">
          <div className="col-12 mb-3">
            <label htmlFor="validationCustom01">Email</label>
            <input type="email" className="form-control theme-border" id="login-email" placeholder="email@example.com"/>
          </div>
          </div>
        <div className="form-row mr-3 ml-3">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom01">City</label>
            <input type="text" className="form-control theme-border" id="validationCustom01" required/>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom02">Phone</label>
            <input type="phone" className="form-control theme-border" id="validationCustom02" required/>
          </div>
        </div>
        <div className="form-group ml-4">
          <div className="form-check">
            <input className="form-check-input theme-border" type="checkbox" id="invalidCheck" required/>
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
          </div>

          <button
                  type="submit"

                  className="btn btn-danger btn-submit mx-2 px-4 py-3 mb-1 mt-2 theme-border font-weight-normal"

                >
                  Sign Up
                </button>        </div>
      </form>
      <div className="dropdown-divider p-1 "></div>
      <div className="row mr-3 ml-3">
        <div className="col-12 col-lg-6">
          <button className="form-control theme-border btn fb-btn font-weight-normal"><FontAwesomeIcon icon={faFacebook} className="mr-2"/>Sign Up with Facebook</button>

        </div>
        <div className="col-12 col-lg-6  mb-3">
          <button className="form-control theme-border btn google-btn font-weight-normal" ><FontAwesomeIcon icon={faGoogle} className="mr-2"/>Sign Up With Google</button>

        </div>
      </div>
      <div className="dropdown-divider p-1 "></div>
      <p className="text-inverse text-center">Already have an account? <Link to="<?= base_url() ?>auth/login" data-abc="true">Login</Link></p>
      <p className="text-inverse text-center mb-5"><Link className="active" to="<?= base_url() ?>auth/login" data-abc="true">Forgot Password ?</Link></p>

    </div>
  
    </div>
  </div>
        </>);
        }
        export default SignUp
    ;
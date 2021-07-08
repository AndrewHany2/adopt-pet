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
<div class="container-fluid bg-img">

    <div class="row justify-content-center  align-content-center">
      <div class="col-12 col-md-7 box mt-5 px-lg-5">
      <form>
        <div class="form-row mt-4 mr-3 ml-3 pt-5 pb-2">
          <div class="col-md-6 mb-3">
            <label for="validationCustom01">First name</label>
            <input type="text" class="form-control theme-border" id="validationCustom01" value="Mark" required/>
          </div>
          <div class="col-md-6 mb-3">
            <label for="validationCustom02">Last name</label>
            <input type="text" class="form-control theme-border" id="validationCustom02" value="Otto" required/>
          </div>
        </div>
        <div class="form-row mr-3 ml-3 pb-2">
          <div class="col-12 mb-3">
            <label for="validationCustom01">Email</label>
            <input type="email" class="form-control theme-border" id="login-email" placeholder="email@example.com"/>
          </div>
          </div>
        <div class="form-row mr-3 ml-3">
          <div class="col-md-6 mb-3">
            <label for="validationCustom01">City</label>
            <input type="text" class="form-control theme-border" id="validationCustom01" required/>
          </div>
          <div class="col-md-6 mb-3">
            <label for="validationCustom02">Phone</label>
            <input type="phone" class="form-control theme-border" id="validationCustom02" required/>
          </div>
        </div>
        <div class="form-group ml-4">
          <div class="form-check">
            <input class="form-check-input theme-border" type="checkbox" value="" id="invalidCheck" required/>
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <button class="btn btn-danger theme-border ml-4 mb-3 font-weight-normal " type="submit">Sign Up</button>
        
      </form>
      <div class="dropdown-divider p-1 "></div>
      <div class="row mr-3 ml-3">
        <div class="col-12 col-lg-6">
          <button class="form-control theme-border btn fb-btn font-weight-normal"><FontAwesomeIcon icon={faFacebook} className="mr-2"/>Sign Up with Facebook</button>

        </div>
        <div class="col-12 col-lg-6  mb-3">
          <button class="form-control theme-border btn google-btn font-weight-normal" ><FontAwesomeIcon icon={faGoogle} className="mr-2"/>Sign Up With Google</button>

        </div>
      </div>
      <div class="dropdown-divider p-1 "></div>
      <p class="text-inverse text-center">Already have an account? <Link to="<?= base_url() ?>auth/login" data-abc="true">Login</Link></p>
      <p class="text-inverse text-center mb-5"><Link class="active" to="<?= base_url() ?>auth/login" data-abc="true">Forgot Password ?</Link></p>
    </div>
  
    </div>
  </div>
        </>);
        }
        export default SignUp
    ;
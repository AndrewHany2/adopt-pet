import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
// import FacebookLogin from 'react-facebook-login';

function LoginFacebook() {

  // const responseFacebook = (response) => {
  //     return response;
  //   }
  return (
    <>
      <a className=" form-control theme-border btn mb-2 fb-btn font-weight-normal" href="http://localhost:8000/api/user/login/facebook/callback" role="button">
        <FontAwesomeIcon icon={faFacebook} className="mr-2" />
        Sign in with Facebook
      </a>
      {/* <button className="form-control theme-border btn mb-2 fb-btn font-weight-normal">
                <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                Sign In with Facebook
              </button> */}
      {/* <FacebookLogin
        appId="5060833230611081"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="fb-btn form-control theme-border btn mb-2 fb-btn font-weight-normal"
        icon={<i className="fa fa-facebook" style={{marginLeft:'5px'}}></i>}
        textButton = "&nbsp;&nbsp;Sign In with Facebook"                                                                
        /> */}
    </>
  );
}

export default LoginFacebook;

import React from 'react';
import FacebookLogin from 'react-facebook-login';

function LoginFacebook() {
  
const responseFacebook = (response) => {
    return response;
  }
  return (
    <>
    <FacebookLogin
        appId="5060833230611081"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="fb-btn form-control theme-border btn mb-2 fb-btn font-weight-normal"
        icon={<i className="fa fa-facebook" style={{marginLeft:'5px'}}></i>}
        textButton = "&nbsp;&nbsp;Sign In with Facebook"                                                                
        />
  </>
  );
}

export default LoginFacebook;

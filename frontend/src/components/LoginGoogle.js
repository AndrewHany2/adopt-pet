import React from 'react';
import GoogleLogin from 'react-google-login';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";


function LoginGoogle() {
  
    // const responseGoogle = (response) => {
    //     return response;
    //   }

    return (
    <>

        <a className="form-control theme-border btn google-btn mb-2 font-weight-normal" 
            href="http://localhost:8000/api/user/login/google/callback">
                <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                Sign In With Google
        </a>
        
     {/* <GoogleLogin
    clientId="714325331151-ae7jueb7a25q79nc13h346u35f2pk00p.apps.googleusercontent.com"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    className="form-control theme-border btn google-btn mb-2 font-weight-normal"
    icon={false}
    >
        <i className="fa fa-google" style={{ marginLeft: '5px' }}/> 
        <span>&nbsp;&nbsp;Sign In with Google</span>                                                               
    </GoogleLogin> */}

  </>
  );
}

export default LoginGoogle;

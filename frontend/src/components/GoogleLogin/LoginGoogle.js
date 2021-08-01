import React from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {loginByGoogle} from "../../store/actions/UserActions"
import {useEffect} from "react"
import "./LoginGoogle.css"



function LoginGoogle(props) {
    const { push } = useHistory()
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);

  
    const responseSuccessGoogle = async (response) => {
        dispatch(loginByGoogle(response.tokenId))


      }
      const responseFailureGoogle = (response) => {
        return response;
      }
      useEffect(() => {
        if (userLogin.success === true) {
         push(`/profile/${userLogin.info.userId}`);
        }
      });
    return (
    <>
    <GoogleLogin
    clientId="250957011123-idjuenirgj99td96d8fl8ttdgq9ejskt.apps.googleusercontent.com"
    render={renderProps => (
      <button className="form-control theme-border btn google-btn mb-2 font-weight-normal mx-3" onClick={renderProps.onClick} disabled={renderProps.disabled}><i className="fa fa-google" style={{ marginLeft: '5px' }}/> Sign In with Google</button>
    )}
    buttonText="Login"
    onSuccess={responseSuccessGoogle}
    onFailure={responseFailureGoogle}
    cookiePolicy={'single_host_origin'}
  />,

  </>


  );
}

export default LoginGoogle;

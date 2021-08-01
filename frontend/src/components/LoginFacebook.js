import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {loginByFacebook} from "../store/actions/UserActions"
import {useDispatch , useSelector} from "react-redux"
import { useHistory } from "react-router-dom";
import {useEffect} from "react"



function LoginFacebook() {
  const { push } = useHistory()
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
const responseFacebook = (response) => {

    dispatch(loginByFacebook({accessToken:response.accessToken,userID:response.userID}))

      return response;
    }

    useEffect(() => {
      if (userLogin.success === true) {
       push(`/profile/${userLogin.info.userId}`);
      }
    });
  return (
    <>
      {/* <a className=" form-control theme-border btn mb-2 fb-btn font-weight-normal" href="http://localhost:8000/api/user/login/facebook/callback" role="button">
        <FontAwesomeIcon icon={faFacebook} className="mr-2" />
        Sign in with Facebook
      </a> */}
      {/* <button className="form-control theme-border btn mb-2 fb-btn font-weight-normal">
                <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                Sign In with Facebook
              </button> */}
      {/* <FacebookLogin
        appId="5060833230611081"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="fb-btn form-control theme-border btn mb-2 font-weight-normal mx-3 mt-3"
        icon={<i className="fa fa-facebook" style={{marginLeft:'5px'}}></i>}
        textButton = "&nbsp;&nbsp;Sign In with Facebook"                                                                
        /> */}


<FacebookLogin
    appId="1452614855116764"
    autoLoad={false}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class form-control theme-border btn ml-2 fb-btn font-weight-normal"
    icon="fa-facebook"
    textButton=" Login By Facebook"
  />,
    </>
  );
}

export default LoginFacebook;

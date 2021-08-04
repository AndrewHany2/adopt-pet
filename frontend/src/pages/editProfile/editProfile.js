import { useRef, useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import FormData from "form-data";
import axios from "axios";
import "./editProfile.css";
import Joi from "joi";
import { getProfile } from "../../store/actions/UserActions";

const EditProfile = () => {
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);
  const url = window.location.href.split("/");
  const length = url.length;
  const id = url[length - 1];
  const profileData = useSelector((state) => state.profile);
  const userLogin = useSelector((state) => state.userLogin);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProfile(userLogin.info.userId))
  })
  const schema = {
    fname: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .optional()
      .allow("")
      .messages({
        "string.min": `First name should have a minimum length of {#limit}`,
        "string.max": `First name should have a maximum length of {#limit}`,
      }),

    lname: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .optional()
      .allow("")
      .messages({
        "string.min": `Last name should have a minimum length of {#limit}`,
        "string.max": `Last name should have a maximum length of {#limit}`,
      }),

    email: Joi.string()
      .optional()
      .allow("")
      .email({
        minDomainSegments: 2,
        tlds: false,
      })
      .messages({
        "string.email": `Please enter a valid email`,
      }),

    phone: Joi.string()
      .optional()
      .allow("")
      .length(11)
      .pattern(/^(010|012|011|015)[0-9]{8}$/)
      .messages({
        "string.pattern.base": `Please enter a valid mobile phone number`,
        "string.length": `Please enter 11 numbers`,
      }),
  };
  const [errors, setErrors] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    validInfo: "",
  });

  const [fname, setFName] = useState(profileData.userInfo?.firstName ?profileData.userInfo.firstName :"");
  const [lname, setLName] = useState(profileData.userInfo?.lastName?profileData.userInfo.lastName :"");
  const [email, setEmail] = useState(profileData.userInfo?.email?profileData.userInfo.email :"");
  const [phone, setPhone] = useState(profileData.userInfo?.phone? profileData.userInfo.phone:"");
  const [country, setCountry] = useState(profileData.userInfo?.country?profileData.userInfo.country :"");
  const [city, setCity] = useState(profileData.userInfo?.city?profileData.userInfo.city :"");
  const [img, setImg] = useState();
  const form_data = new FormData();
  const [emailError, setEmailError] = useState("");

  const handleImageUpload = (e) => {
    setImg(e.target.files[0]);
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    //  if (img) {
    //    const reader = new FileReader();
    //    const { current } = uploadedImage;
    //     current.file = img;
    //     reader.onload = e => {
    //     current.src = e.target.result;
    //     };
    //     reader.readAsDataURL(img);
    //  }
  };

  const handleChangeFName = (e) => {
    setFName(e.target.value);
    const validate = schema.fname.validate(e.target.value);
    let myErrors = { ...errors };
    myErrors.fName = validate.error ? validate.error.details[0].message : null;
    setErrors(myErrors);
  };
  const handleChangeLName = (e) => {
    setLName(e.target.value);
    const validate = schema.lname.validate(e.target.value);
    let myErrors = { ...errors };
    myErrors.lName = validate.error ? validate.error.details[0].message : null;
    setErrors(myErrors);
  };
  const handleChangeEM = (e) => {
    setEmail(e.target.value);
    const validate = schema.email.validate(e.target.value);
    let myErrors = { ...errors };
    myErrors.email = validate.error ? validate.error.details[0].message : null;
    setErrors(myErrors);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
    const validate = schema.phone.validate(e.target.value);
    let myErrors = { ...errors };
    myErrors.phone = validate.error ? validate.error.details[0].message : null;
    setErrors(myErrors);
  };
  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleOnClick = () => {
    if (fname) {
      if (schema.fname.validate(fname)) {
        form_data.append("firstName", fname);
      } else {
        let myErrors = { ...errors };
        myErrors.validInfo = "Please Enter Valid Info";
        setErrors(myErrors);
      }
    }
    if (lname) {
      if (schema.lname.validate(lname)) {
        form_data.append("lastName", lname);
      } else {
        let myErrors = { ...errors };
        myErrors.validInfo = "Please Enter Valid Info";
        setErrors(myErrors);
      }
    }
    if (email) {
      if (schema.email.validate(email)) {
        form_data.append("email", email);
      } else {
        let myErrors = { ...errors };
        myErrors.validInfo = "Please Enter Valid Info";
        setErrors(myErrors);
      }
    }
    if (phone) {
      if (schema.phone.validate(phone)) {
        form_data.append("phone", phone);
      } else {
        let myErrors = { ...errors };
        myErrors.validInfo = "Please Enter Valid Info";
        setErrors(myErrors);
      }
    }
    if (country) {
      form_data.append("country", country);
    }
    if (city) {
      form_data.append("city", city);
    }
    if (img) {
      form_data.append("image", img);
    }
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));

    const header = {
      headers: {
        Authorization: userInfo.token,
      },
    };
    axios
      .put(`/api/user/${id}`, form_data, header)
      .then((response) => {
        window.location.href = `/profile/${id}`;
      })
      .catch((error) => {
        setEmailError(error.response.data.message);
        console.error("Something went wrong!", error.response.data.message);
      });
  };

  return (
    <>
      <div className="container" style={{ minHeight: "24vw" }}>
        {emailError && (
          <div className="alert alert-danger d-block mt-4">{emailError}</div>
        )}
        {errors.validInfo && (
          <div className="alert alert-danger d-block mt-4">
            {errors.validInfo}
          </div>
        )}
        <form className="row">
          <div className="col-md-5">
            <div
              className="m-4"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
                name="image"
                style={{
                  display: "none",
                }}
              />
              <div
                style={{
                  width: "100%",
                }}
                onClick={() => imageUploader.current.click()}
              >
                <img
                  className="editImg"
                  ref={uploadedImage}
                  src={
                    profileData.userInfo?.image
                      ? profileData.userInfo?.image
                      : "/assets/person/noAvatar.png"
                  }
                  alt="user"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "acsolute",
                  }}
                />
              </div>
              <div className="text-danger mt-4">Click to upload Image</div>
            </div>
          </div>
          <div className="col-md-7 my-2">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={fname}
              onChange={handleChangeFName}
              className="d-block w-75 mx-auto my-3"
            />
            {errors.fName && (
              <div className="alert alert-danger d-block mt-4">
                {errors.fName}
              </div>
            )}
            <input
              type="text"
              name="lastName"
              value={lname}
              onChange={handleChangeLName}
              className="d-block w-75 mx-auto my-3"
              placeholder="Last name"
            />
            {errors.lName && (
              <div className="alert alert-danger d-block mt-4">
                {errors.lName}
              </div>
            )}
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChangeEM}
              className="d-block w-75 mx-auto my-3"
              placeholder="Email"
            />
            {errors.email && (
              <div className="alert alert-danger d-block mt-4">
                {errors.email}
              </div>
            )}
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={handleChangePhone}
              className="d-block w-75 mx-auto my-3"
              placeholder="Phone"
            />
            {errors.phone && (
              <div className="alert alert-danger d-block mt-4">
                {errors.phone}
              </div>
            )}
            <input
              type="text"
              name="country"
              value={country}
              onChange={handleChangeCountry}
              className="d-block w-75 mx-auto my-3"
              placeholder="Country"
            />
            <input
              type="text"
              name="city"
              value={city}
              onChange={handleChangeCity}
              className="d-block w-75 mx-auto my-3"
              placeholder="City"
            />
          </div>
        </form>
        <div className="text-center m-3">
          <button
            className="btn btn-warning text-white"
            onClick={handleOnClick}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};
export default EditProfile;

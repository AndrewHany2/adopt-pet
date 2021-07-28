import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import FormData from "form-data";
import axios from "axios";
import './editProfile.css'

const EditProfile = () => {
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);
  const url = window.location.href.split("/")
  const length = url.length;
  const id = url[length - 1];
  const profileData = useSelector((state) => state.profile);



  const [fname, setFName] = useState(profileData.userInfo.firstName);
  const [lname, setLName] = useState(profileData.userInfo.lastName);
  const [email, setEmail] = useState(profileData.userInfo.email);
  const [phone, setPhone] = useState(profileData.userInfo.phone);
  const [country, setCountry] = useState(profileData.userInfo.country);
  const [city, setCity] = useState(profileData.userInfo.city);
  const [img, setImg] = useState();
  const form_data = new FormData();
  const [emailError, setEmailError] = useState("");

  const handleImageUpload = e => {
    setImg(e.target.files[0])
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
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

  const handleChangeFName = e => setFName(e.target.value)
  const handleChangeLName = e => setLName(e.target.value)
  const handleChangeEM = e => setEmail(e.target.value)
  const handleChangePhone = e => setPhone(e.target.value)
  const handleChangeCountry = e => setCountry(e.target.value)
  const handleChangeCity = e => setCity(e.target.value)

  const handleOnClick = () => {
    if (fname) {
      form_data.append('firstName', fname);
    }
    if (lname) {
      form_data.append('lastName', lname);
    }
    if (email) {
      form_data.append('email', email);
    }
    if (phone) {
      form_data.append('phone', phone);
    }
    if (country) {
      form_data.append('country', country);
    }
    if (city) {
      form_data.append('city', city);
    }
    if (img) {
      form_data.append('image', img);
    }
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"))


    const header = {
      headers: {
        Authorization: userInfo.token
      }
    }
    axios.put(`/api/user/${id}`, form_data, header)
      .then(response => {
        window.location.href = `/profile/${id}`
        console.log("Data: ", response.data);
      }).catch(error => {
        setEmailError(error.response.data.message)
        console.error('Something went wrong!', error.response.data.message);
      });

  }


  return <>
    <div className="container" style={{ minHeight: "24vw" }}>
      {emailError && (
        <div className="alert alert-danger d-block mt-4">
          {emailError}
        </div>
      )}
      <form className="row">
        <div className="col-md-5">
          <div className="m-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={imageUploader}
              name="image"
              style={{
                display: "none"
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
                src={profileData.userInfo?.image ? profileData.userInfo?.image : '/assets/person/noAvatar.png'}
                alt="user"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "acsolute"
                }}
              />
            </div>
            <div className="text-danger mt-4">
              Click to upload Image
            </div>
          </div>
        </div>
        <div className="col-md-7 my-2">
          <input type="text" name="firstName" placeholder="First name" value={fname}
            onChange={handleChangeFName} className="d-block w-75 mx-auto my-3" />
          <input type="text" name="lastName" value={lname}
            onChange={handleChangeLName} className="d-block w-75 mx-auto my-3" placeholder="Last name" />
          <input type="text" name="email" value={email}
            onChange={handleChangeEM} className="d-block w-75 mx-auto my-3" placeholder="Email" />
          <input type="text" name="phone" value={phone}
            onChange={handleChangePhone} className="d-block w-75 mx-auto my-3" placeholder="Phone" />
          <input type="text" name="country" value={country}
            onChange={handleChangeCountry} className="d-block w-75 mx-auto my-3" placeholder="Country" />
          <input type="text" name="city" value={city}
            onChange={handleChangeCity} className="d-block w-75 mx-auto my-3" placeholder="City" />


        </div>
      </form>
      <div className="text-center m-3">
        <button className="btn btn-warning text-white" onClick={handleOnClick}>
          Update
        </button>
      </div>
    </div>
  </>

}
export default EditProfile;
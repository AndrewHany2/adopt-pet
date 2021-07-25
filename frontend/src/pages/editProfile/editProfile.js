import {useRef,useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import FormData from "form-data";
import axios from "axios";



const EditProfile = ()=>{
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);
  const url = window.location.href.split("/")
  const length = url.length;
  const  id = url[length-1] ;
//console.log(uploadedImage)
//console.log(imageUploader)


  const [fname, setFName] = useState();
  const [lname, setLName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [img, setImg] = useState();
  const form_data = new FormData();

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

  const handleOnClick = ()=>{
    if(fname){
      form_data.append('firstName', fname);
    }
    if(lname){
      form_data.append('lastName', lname);
    }
    if(email){
      form_data.append('email', email);
    }
    if(phone){
      form_data.append('phone', phone);
    }
    if(country){
      form_data.append('country', country);
    }
    if(city){
      form_data.append('city', city);
    }
    if(img){
      form_data.append('image', img);
    }
    axios.put(`/api/user/${id}`, form_data)
           .then(response => {
            window.location.href=`/profile/${id}`
             console.log("Data: ", response.data);
           }).catch(error => {
             console.error('Something went wrong!', error);
           });
}


    return <>
    <div className="container" style={{minHeight:"24vw"}}>
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
                  border: "1px dashed black"
            }}
            onClick={() => imageUploader.current.click()}
        >
          <img
            ref={uploadedImage}
            style={{
              width: "100%",
              height: "100%",
              position: "acsolute"
            }}
          />
    </div>
    Click to upload Image
  </div>
  </div>
    <div className="col-md-7 my-2">
          <input  type="text" name="firstName" placeholder="First name" 
                          onChange={handleChangeFName}    className="d-block w-75 mx-auto my-3"/>
          <input type="text" name="lastName"
                  onChange={handleChangeLName}   className="d-block w-75 mx-auto my-3" placeholder="Last name" />
          <input type="text" name="email" 
                onChange={handleChangeEM}  className="d-block w-75 mx-auto my-3" placeholder="Email" />
          <input type="text" name="phone"
                  onChange={handleChangePhone} className="d-block w-75 mx-auto my-3" placeholder="Phone" />
          <input type="text" name="country"
                  onChange={handleChangeCountry} className="d-block w-75 mx-auto my-3" placeholder="Country" />
          <input type="text" name="city"
                  onChange={handleChangeCity} className="d-block w-75 mx-auto my-3" placeholder="City" />


    </div>
  </form>
  <div className="text-center m-3">
    <button className="btn btn-warning text-white"  onClick={handleOnClick}>
        Update
    </button>
  </div>
  </div>
  </>

}
export default EditProfile;

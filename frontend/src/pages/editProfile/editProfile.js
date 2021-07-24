import {useRef,useState,useEffect } from 'react';

const EditProfile = ()=>{
    const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  const handleImageUpload = e => {
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
  };

    return <>
    <div className="container" style={{minHeight:"24vw"}}>
    <form className="row">
      <div className="col-md-4">
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
            style={{
              display: "none"
                  }}
        />
        <div
            style={{
                  width: "50%",
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
    <div className="col-md-8 my-2">
          <input  type="text" name="name" placeholder="First name" 
                              className="d-block w-75 mx-auto my-3"/>
          <input type="text" name="email" className="d-block w-75 mx-auto my-3" placeholder="Last name" />
          <input type="text" name="email" className="d-block w-75 mx-auto my-3" placeholder="Email" />
          <input type="text" name="email" className="d-block w-75 mx-auto my-3" placeholder="Age" />

    </div>
  </form>
  <div className="text-center m-3">
    <button className="btn btn-warning text-white ">
        Update
    </button>
  </div>
  </div>
  </>

}
export default EditProfile;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import { withRouter } from "react-router";
import { Form } from "react-bootstrap";
import { adoptpet } from "../store/actions/petActions";
import "bootstrap/dist/js/bootstrap.bundle.min";
import LoadingComponent from "./loadingComponent/loadingComponent";
function AdoptionForm({ history }) {

  const handleEnter = event => {
    if (event.keyCode === 13) {
      event.preventDefault();
      temp();
    }
  };

  const [label, setLabel] = useState('Choose Image');
  const [pet, setpet] = useState({
    name: "",
    gender: "",
    vaccinated: "",
    dateOfBirth: "",
    petType: "",
    size: "",
    description: "",
    image: "",
  });
  const userLogin = useSelector((state) => state.userLogin);
  const {
    loading,
    success,
    pet: petInfo,
  } = useSelector((state) => state.petsForm);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userLogin.info) {
      history.push("/signin");
    }
    if (success) {
      history.push(`/pet/${petInfo.petId}`);
    }
  });
  useEffect(() => {
    return () => {
      dispatch({ type: "PET_ADOPT_RESET" });
    };
  }, [dispatch]);
  const imageRef = useRef();

  const handleChange = (e) => {
    const key = e.currentTarget.name;
    const state = { ...pet };
    if (key !== "image") {
      state[key] = e.target.value;
    } else {
      state[key] = e.target.files[0];
      setLabel(e.target.files[0].name)
    }
    setpet(state);
  };
  let Post = (e) => {
    e.preventDefault();
    temp();
  };

  const temp = async () => {
    let formdata = new FormData();
    formdata.append("name", pet.name);
    formdata.append("dateOfBirth", pet.dateOfBirth);
    formdata.append("petType", pet.petType);
    formdata.append("vaccinated", pet.vaccinated);
    formdata.append("gender", pet.gender);
    formdata.append("size", pet.size);
    formdata.append("description", pet.description);
    formdata.append("image", pet.image);
    formdata.append("owner", userLogin.info.userId);
    await dispatch(adoptpet(formdata));
  }

  return (
    <>
      <section id="AdoptForm">
        <div className="container">
          <div className="row pb-5 m-2 mt-5">
            <div className="col-12  col-lg-7  m-auto adpotForm">
              <p className="h4">Send Pet!</p>
              <form encType="multipart/form-data" onSubmit={Post}>
                {/* <label className="d-block">Pet Name</label> */}
                <input
                placeholder="Pet Name"
                  type="text"
                  className="pb-1 mb-3 mt-3"
                  name="name"
                  required
                  onChange={handleChange}
                  onKeyUp={handleEnter}
                />
                {/* <label className="d-block mt-1">Pet Type</label> */}
                <select
                  placeholder="Pet Type"
                  name="petType"
                  id="petTypes"
                  required
                  onChange={handleChange}
                >
                  <option value="">Select Type :</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="other">Other</option>
                </select>
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-6 text-center">
                    {/* <label className="mt-2">Date Of Birth</label> */}
                    <input
                      placeholder="Date of birth"
                      type="date"
                      className="ml-1 mt-3"
                      name="dateOfBirth"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 text-center">
                    {/* <label className="mt-2">Vaccinated</label> */}
                    <select
                      placeholder="Vaccinated"
                      name="vaccinated"
                      className="ml-1 mt-3"
                      id="vaccinated"
                      required
                      onChange={handleChange}
                    >
                      <option value="">Vaccinated:</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6  col-md-6 pr-1 pl-1 text-center">
                    {/* <label className="ml-1 mt-2">Gender</label> */}
                    <select
                    placeholder="Gender"
                      name="gender"
                      className="ml-1 mt-3"
                      id="gender"
                      required
                      onChange={handleChange}
                    >
                      <option value="">Select Gander:</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="col-6  col-md-6 pr-0 pl-0 text-center">
                    {/* <label className=" ml-1 mt-2">Size</label> */}
                    <select
                      placeholder="Size"
                      name="size"
                      className="ml-1 mt-3 "
                      id="size"
                      required
                      onChange={handleChange}
                    >
                      <option value="">Select Size:</option>
                      <option value="small">Small</option>
                      <option value="Medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>
                </div>
                {/* <label className="d-block">Description</label> */}
                <textarea
                className="mt-3"
                placeholder="Description"
                  name="description"
                  cols="40"
                  rows="3"
                  required
                  onChange={handleChange}
                  onKeyUp={handleEnter}
                />

                <Form.File
                  className="mt-3 choose-img-pet"
                  id="custom-file-translate-scss"
                  name="image"
                  required
                  label={label}
                  ref={imageRef}
                  lang="en"
                  accept="image/*"
                  onChange={handleChange}
                  custom
                />
                {loading ? (
                  <LoadingComponent></LoadingComponent>
                ) : (
                  <input
                    type="submit"
                    value="Add Pet"
                    className="sendMessage d-block mt-3 ml-auto mr-auto px-3 py-2"
                  />
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default withRouter(AdoptionForm);

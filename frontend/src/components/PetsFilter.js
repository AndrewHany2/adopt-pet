import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPets } from "./../store/actions/petActions";

function PetsFilter() {
  const [filterByGender, setFilterByGender] = useState("");
  const [filterByPet, setFilterByPet] = useState("");
  const [filterByAge, setFilterByAge] = useState("");
  const [kindClicked, setKindClicked] = useState(false);
  const [genderClicked, setGenderClicked] = useState(false);
  const [ageClicked, setAgeClicked] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPets(filterByGender, filterByPet, filterByAge));
  });
  return (
    <div className={`bg-light-custom  border-irregular1 py-3`}>
      <p
        className="m-0"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <button
          className={`btn btn-primary ${kindClicked ? "myActive" : ""}`}
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={() => {
            setKindClicked(!kindClicked);
            console.log(kindClicked);
          }}
        >
          Kind
        </button>
        <button
          className={`btn btn-primary ${genderClicked ? "myActive" : ""}`}
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample1"
          aria-expanded="false"
          aria-controls="collapseExample1"
          onClick={() => {
            setGenderClicked(!genderClicked);
          }}
        >
          Gender
        </button>
        <button
          className={`btn btn-primary ${ageClicked ? "myActive" : ""}`}
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample3"
          aria-expanded="false"
          aria-controls="collapseExample3"
          onClick={() => {
            setAgeClicked(!ageClicked);
          }}
        >
          Age
        </button>
      </p>
      <div
        className="collapse pb-4"
        id="collapseExample"
        style={{ width: "50%", margin: "0px auto" }}
      >
        <div className="card card-body border-irregular1">
          <div className="custom-control custom-checkbox custom-control-inline">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
              onChange={(e) => {
                e.target.checked ? setFilterByPet("cat") : setFilterByPet("");
              }}
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Cat
            </label>
          </div>
          <div className="custom-control custom-checkbox custom-control-inline">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck2"
              onChange={(e) => {
                e.target.checked ? setFilterByPet("dog") : setFilterByPet("");
              }}
            />
            <label className="custom-control-label" htmlFor="customCheck2">
              Dog
            </label>
          </div>
        </div>
      </div>
      <div
        className="collapse pb-4"
        id="collapseExample1"
        style={{ width: "50%", margin: "0px auto" }}
      >
        <div className="card card-body border-irregular1">
          <div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                className="custom-control-input"
                onChange={(e) => {
                  e.target.checked
                    ? setFilterByGender("male")
                    : setFilterByGender("");
                }}
              />
              <label className="custom-control-label" htmlFor="customRadio1">
                Male
              </label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadio2"
                name="customRadio"
                className="custom-control-input"
                onChange={(e) => {
                  e.target.checked
                    ? setFilterByGender("female")
                    : setFilterByGender("");
                }}
              />
              <label className="custom-control-label" htmlFor="customRadio2">
                Female
              </label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadio3"
                name="customRadio"
                className="custom-control-input"
                onChange={(e) => {
                  setFilterByGender("");
                }}
              />
              <label className="custom-control-label" htmlFor="customRadio3">
                All
              </label>
            </div>
          </div>
        </div>
      </div>
      <div
        className="collapse pb-4"
        id="collapseExample3"
        style={{ width: "50%", margin: "0px auto" }}
      >
        <div
          className="card card-body border-irregular1"
          onChange={(e) => {
            setFilterByAge(e.target.value);
          }}
        >
          <div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline1"
                name="customRadioInline"
                className="custom-control-input"
                value="young"
              />
              <label
                className="custom-control-label"
                htmlFor="customRadioInline1"
              >
                young
              </label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline2"
                name="customRadioInline"
                className="custom-control-input"
                value="old"
              />
              <label
                className="custom-control-label"
                htmlFor="customRadioInline2"
              >
                old
              </label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline3"
                name="customRadioInline"
                className="custom-control-input"
                value="senior"
              />
              <label
                className="custom-control-label"
                htmlFor="customRadioInline3"
              >
                senior
              </label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline4"
                name="customRadioInline"
                className="custom-control-input"
                value=""
              />
              <label
                className="custom-control-label"
                htmlFor="customRadioInline4"
              >
                All
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetsFilter;

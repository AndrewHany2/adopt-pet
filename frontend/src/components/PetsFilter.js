import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

function PetsFilter(props) {
  const [filterByGender, setFilterByGender] = useState("");
  const [filterByPet, setFilterByPet] = useState([]);
  const [filterByAge, setFilterByAge] = useState("");
  const [filterByVaccinated, setFilterByVaccinated] = useState("");
  const [kindClicked, setKindClicked] = useState(false);
  const [genderClicked, setGenderClicked] = useState(false);
  const [ageClicked, setAgeClicked] = useState(false);
  const [vaccinatedClicked, setVaccinatedClicked] = useState(false);

  useEffect(() => {
    props.history.push("/pets/1");
  }, [props.history, filterByGender, filterByPet, filterByAge]);
  return (
    <div className={`bg-light-custom  border-irregular1 pt-2`}>
      <p
        className="m-0 pb-2"
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
        <button
          className={`btn btn-primary ${vaccinatedClicked ? "myActive" : ""}`}
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample4"
          aria-expanded="false"
          aria-controls="collapseExample4"
          onClick={() => {
            setVaccinatedClicked(!vaccinatedClicked);
          }}
        >
          Vaccinated
        </button>
      </p>
      <div
        className="collapse pb-3"
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
                if (e.target.checked) {
                  let tempArr = [...filterByPet];
                  tempArr.push("cat");
                  setFilterByPet(tempArr);
                  props.getPets(
                    filterByGender,
                    tempArr,
                    filterByAge,
                    filterByVaccinated
                  );
                } else {
                  const index = filterByPet.findIndex(
                    (element) => element === "cat"
                  );
                  let tempArr = [...filterByPet];
                  tempArr.splice(index, 1);
                  setFilterByPet(tempArr);
                  props.getPets(
                    filterByGender,
                    tempArr,
                    filterByAge,
                    filterByVaccinated
                  );
                }
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
                if (e.target.checked) {
                  let tempArr = [...filterByPet];
                  tempArr.push("dog");
                  setFilterByPet(tempArr);
                  props.getPets(
                    filterByGender,
                    tempArr,
                    filterByAge,
                    filterByVaccinated
                  );
                } else {
                  const index = filterByPet.findIndex(
                    (element) => element === "dog"
                  );
                  let tempArr = [...filterByPet];
                  tempArr.splice(index, 1);
                  setFilterByPet(tempArr);
                  props.getPets(
                    filterByGender,
                    tempArr,
                    filterByAge,
                    filterByVaccinated
                  );
                }
              }}
            />
            <label className="custom-control-label" htmlFor="customCheck2">
              Dog
            </label>
          </div>
        </div>
      </div>
      <div
        className="collapse pb-3"
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
                  if (e.target.checked) {
                    props.getPets(
                      "male",
                      filterByPet,
                      filterByAge,
                      filterByVaccinated
                    );
                    setFilterByGender("male");
                  } else {
                    props.getPets(
                      "",
                      filterByPet,
                      filterByAge,
                      filterByVaccinated
                    );
                    setFilterByGender("");
                  }
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
                  if (e.target.checked) {
                    props.getPets(
                      "female",
                      filterByPet,
                      filterByAge,
                      filterByVaccinated
                    );
                    setFilterByGender("female");
                  } else {
                    props.getPets(
                      "",
                      filterByPet,
                      filterByAge,
                      filterByVaccinated
                    );
                    setFilterByGender("");
                  }
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
                  props.getPets(
                    "",
                    filterByPet,
                    filterByAge,
                    filterByVaccinated
                  );
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
        className="collapse pb-3"
        id="collapseExample3"
        style={{ width: "50%", margin: "0px auto" }}
      >
        <div
          className="card card-body border-irregular1"
          onChange={(e) => {
            setFilterByAge(e.target.value);
            props.getPets(
              filterByGender,
              filterByPet,
              e.target.value,
              filterByVaccinated
            );
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
      <div
        className="collapse pb-3"
        id="collapseExample4"
        style={{ width: "50%", margin: "0px auto" }}
      >
        <div
          className="card card-body border-irregular1"
          onChange={(e) => {
            if (e.target.checked) {
              setFilterByVaccinated(e.target.value);
              props.getPets(
                filterByGender,
                filterByPet,
                filterByAge,
                e.target.value
              );
            } else {
              setFilterByVaccinated("");
            }
          }}
        >
          <div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="vaccinatedYes"
                name="vaccinated"
                className="custom-control-input"
                value="yes"
              />
              <label className="custom-control-label" htmlFor="vaccinatedYes">
                Yes
              </label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="vaccinatedNo"
                name="vaccinated"
                className="custom-control-input"
                value="no"
              />
              <label className="custom-control-label" htmlFor="vaccinatedNo">
                No
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(PetsFilter);

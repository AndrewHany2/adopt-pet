import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PetsCards from "../../components/PetsCards";
import { getPets } from "../../store/actions/petActions";
import "./petsGallery.css";

function PetsGallery(props) {
  const [filterByGender, setFilterByGender] = useState("");
  const [filterByPet, setFilterByPet] = useState("");
  const [filterByAge, setFilterByAge] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (filterByGender || filterByAge || filterByPet)
      dispatch(getPets(filterByGender, filterByPet, filterByAge));
  });

  return (
    <div>
      <div className="container-fluid backgroundImg p-4">
        <div className="p-2 p-sm-4">
          <i
            className="fa fa-paw"
            style={{ color: "#f9575c", fontSize: "4vw" }}
          ></i>
        </div>
        <div className="adoptionFont myFont">Adoption</div>
        <div className="homeFont myFont">
          <span>HOME {">"}</span>
          <span style={{ color: "#cecece" }}>ADOPTION</span>
        </div>
      </div>
      <div className="container col-12 col-lg-8 pt-5">
        <div className="text-center">
          <p className="myFont headFont">Find a new furry friend</p>
          <p className="myFont bodyFont">
            Aliquam erat lorem ipsum volutpat In id fermentum augue, ut
            pellentesque leo. Maecenas at arcu risus. Donec commodo sodales ex,
            scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis
            maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum
            convall.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <PetsCards></PetsCards>
        </div>
        <div className="col-2 m-5 mt-0 m-sm-0 mt-sm-5">
          <div>Filter by: </div>
          <div className="ml-3">
            <div className="custom-control custom-checkbox">
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
            <div className="custom-control custom-checkbox">
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
            <div className="custom-control custom-radio">
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
            <div className="custom-control custom-radio">
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
            <div
              onChange={(e) => {
                setFilterByAge(e.target.value);
              }}
            >
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
                  value="all"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customRadioInline4"
                >
                  all
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* <nav className="mt-5" aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item disabled">
              <a
                className="page-link"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </div>
  );
}

export default PetsGallery;

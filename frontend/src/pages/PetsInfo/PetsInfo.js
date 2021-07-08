import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPetInfo } from '../../store/actions/petActions'

function PetsInfo({match}) {
  const id=match.params.id
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getPetInfo(id))
  },[])
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
      <div className="page m-5 m-md-0">
        <div className="container">
          <div className="row mt-5">
            <div className="row bg-light-custom border-irregular1">
              <div className="row offset-lg-2 p-4">
                <div className="col-12 col-md-4 text-center">
                  <div>
                    <i
                      style={{ color: "#675444", cursor: "pointer" }}
                      className="h3 fas fa-arrow-circle-left"
                    ></i>
                    <i
                      style={{ color: "#675444", cursor: "pointer" }}
                      className="h3 fas fa-arrow-circle-right ml-3"
                    ></i>
                  </div>
                  <div>
                    <img
                      className="border-irregular1 img-fluid"
                      src="./resources/adoption1.jpg"
                      width="300"
                      height="300"
                      alt=""
                    />
                  </div>
                </div>
                <div className="text-center text-md-left col-12 col-md-8 col-lg-4 mt-4">
                  <div className="row">
                    <h4 className="col-12">
                      <strong>Pet Name:</strong> Lucky
                    </h4>
                    <div className="col-sm-6">
                      <ul className="list-unstyled pet-adopt-info">
                        <li className="h7">
                          Gender: <span> Male</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul className="list-unstyled pet-adopt-info">
                        <li className="h7">
                          Neutered: <span> Yes</span>
                        </li>
                      </ul>
                    </div>

                    <div className="col-sm-6">
                      <ul className="list-unstyled pet-adopt-info">
                        <li className="h7">
                          Age: <span> 5 years</span>
                        </li>
                      </ul>
                    </div>

                    <div className="col-sm-6">
                      <ul className="list-unstyled pet-adopt-info">
                        <li className="h7">
                          Breed: <span> Poodle</span>
                        </li>
                      </ul>
                    </div>

                    <div className="col-sm-6">
                      <ul className="list-unstyled pet-adopt-info">
                        <li className="h7">
                          Vaccinated: <span> Yes</span>
                        </li>
                      </ul>
                    </div>

                    <div className="col-sm-6">
                      <ul className="list-unstyled pet-adopt-info">
                        <li className="h7">
                          Size: <span> Medium</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-md-8">
                      <a className="btn btn-primary">MORE INFO</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3>About Lucky</h3>
            <ul className="custom list-inline font-weight-bold">
              <li className="list-inline-item">
                <i
                  className="fa fa-paw mr-1"
                  style={{ color: "#f9575c", fontSize: "1.3vw" }}
                ></i>
                Friendly to other dogs
              </li>
              <li className="list-inline-item">
                <i
                  className="fa fa-paw mr-1"
                  style={{ color: "#f9575c", fontSize: "1.3vw" }}
                ></i>
                Good for Apartments
              </li>
              <li className="list-inline-item">
                <i
                  className="fa fa-paw mr-1"
                  style={{ color: "#f9575c", fontSize: "1.3vw" }}
                ></i>
                Friendly with Kids
              </li>
            </ul>
            <p style={{ display: "block" }}>
              Elit uasi quidem minus id omnis a nibh fusce mollis imperdie
              tlorem ipuset phas ellus ac sodales Lorem ipsum dolor Phas ellus
              <br />
              ac sodales felis tiam non metus. lorem ipsum dolor sit amet,
              consectetur adipisicing elit uasi quidem minus id omnis a nibh
              fusce mollis imperdie tlorem ipuset campas fincas
            </p>
            <p style={{ display: "block" }}>
              Elit uasi quidem minus id omnis a nibh fusce mollis imperdie
              tlorem ipuset phas ellus ac sodales Lorem ipsum dolor Phas ellus
              <br />
              ac sodales felis tiam non metus. lorem ipsum dolor sit amet,
              consectetur adipisicing elit uasi quidem minus id omnis a nibh
              fusce mollis imperdie tlorem ipuset campas fincas
            </p>
          </div>
          <div className="alert alert-primary mt-5 p-4" role="alert">
            <div style={{ color: "white" }}>
              <p className="h3">Adoption Rules</p>
              <p style={{ color: "white" }}>
                Elit uasi quidem minus id omnis a nibh fusce mollis imperdie
                tlorem ipuset phas ellus ac sodales Lorem ipsum dolor Phas ellus
                ac sodales felis tiam non metus. lorem ipsum dolor sit amet,
                consectetur adipisicing elit uasi quidem minus id omnis a nibh
                fusce mollis imperdie tlorem ipuset campas fincas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetsInfo;

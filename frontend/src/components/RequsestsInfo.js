import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "font-awesome/css/font-awesome.min.css";
import { Carousel } from "react-bootstrap";
import axios from "axios";

function RequestsInfo(props) {
    

  return (
      <>
    {props.requests?.petId && <div className="page m-5 m-md-0">
      <div className="container mb-5">
        <div className="row mt-5">
          <div className="row bg-light-custom border-irregular1">
            <div className="row p-4 d-flex justify-content-around">
              <div
                className="col-12 col-md-4 text-center"
                style={{ width: "300px" }}
              >
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="border-irregular1 img-fluid w-100 myimg"
                      src={props.requests.petId.image}
                      alt=""
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="border-irregular1 img-fluid w-100 myimg"
                      src="/resources/adoption1-185x185.jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="border-irregular1 img-fluid w-100 myimg"
                      src="/resources/adoption2-185x185.jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
             
              <div className="text-center text-md-left col-12 col-md-8 col-lg-4 mt-4">
                <div className="row">
                <h4 className="col-12 mb-3">
                    <strong>Request Status:</strong> {props.requests.status}
                  </h4>
                  <h4 className="col-12">
                    <strong>Pet:</strong> {props.requests.petId.name}
                  </h4>
                  <div className="col-sm-6">
                    <ul className="list-unstyled pet-adopt-info">
                      <li className="h7">
                        Gender: <span> {props.requests.petId.gender}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="list-unstyled pet-adopt-info">
                      <li className="h7">
                        Age: <span>{props.requests.petId.age}</span>
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
                        Vaccinated: <span> {props.requests.petId.vaccinated}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="col-sm-6">
                    <ul className="list-unstyled pet-adopt-info">
                      <li className="h7">
                        Size: <span> {props.requests.petId.size}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>}
    </>
  );
}

export default RequestsInfo;
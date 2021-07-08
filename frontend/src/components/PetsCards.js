import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink as Nav } from "react-router-dom";
import { getPets } from "../store/actions/petActions";

function PetsCards(props) {
  const dispatch = useDispatch();
  const pets = [
    {
      id: 1,
      Name: "pet1",
      Gender: "female",
      Neutered: "Yes",
      Age: "2 years",
      Image: "./resources/adoption1-185x185.jpg",
    },
    {
      id: 2,
      Name: "pet1",
      Gender: "female",
      Neutered: "Yes",
      Age: "2 years",
      Image: "./resources/adoption2-185x185.jpg",
    },
    {
      id: 3,
      Name: "pet1",
      Gender: "female",
      Neutered: "Yes",
      Age: "2 years",
      Image: "./resources/adoption3-185x185.jpg",
    },
    {
      id: 4,
      Name: "pet1",
      Gender: "female",
      Neutered: "Yes",
      Age: "2 years",
      Image: "./resources/adoption4-185x185.jpg",
    },
    {
      id: 5,
      Name: "pet1",
      Gender: "female",
      Neutered: "Yes",
      Age: "2 years",
      Image: "./resources/adoption5-185x185.jpg",
    },
    {
      id: 6,
      Name: "pet1",
      Gender: "female",
      Neutered: "Yes",
      Age: "2 years",
      Image: "./resources/adoption6-185x185.jpg",
    },
    {
      id: 7,
      Name: "pet1",
      Gender: "female",
      Neutered: "Yes",
      Age: "2 years",
      Image: "./resources/adoption7-185x185.jpg",
    },
    {
      id: 8,
      Name: "pet1",
      Gender: "female",
      Neutered: "Yes",
      Age: "2 years",
      Image: "./resources/adoption8-185x185.jpg",
    },
  ];
  useEffect(() => {
    dispatch(getPets());
  }, []);
  return (
    <div
      className="
            row g-4 text-center
          "
    >
      {pets.map((pet) => {
        return (
          <div className="col m-5 mt-0 m-sm-0 mt-sm-5">
            <div className="card bg-light-custom">
              <img
                className="border-irregular1 img-fluid"
                src={pet.Image}
                alt="a"
              />
              <div className="card-body">
                <h5 className="card-title">{pet.Name}</h5>
                <p className="card-text">
                  <div>
                    <b>Gender:</b>
                    {pet.Gender}
                  </div>
                  <div>
                    <b>Neutered:</b>
                    {pet.Neutered}
                  </div>
                  <div>
                    <b>Age:</b>
                    {pet.Age}
                  </div>
                  <div className="mt-4">
                    <Nav
                      to={`/pets/${pet.id}`}
                      className="btn btn-primary px-3 py-2"
                    >
                      More Info
                    </Nav>
                  </div>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PetsCards;

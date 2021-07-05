import React from "react";

function PetsCards(props) {
  const pets = [
    {
      Name: "pet1",
      Gender: "female",
      Neutered: "Yes",
      Age: "2 years",
      Image: "./resources/adoption1-185x185.jpg",
    },
    {
      Name: "pet1",
      Gender: "female",
      Neutered: "Yes",
      Age: "2 years",
      Image: "./resources/adoption2-185x185.jpg",
    },
    {
      Name: "pet1",
      Gender: "female",
      Neutered: "Yes",
      Age: "2 years",
      Image: "./resources/adoption3-185x185.jpg",
    },
    {
      Name: "pet1",
      Gender: "female",
      Neutered: "Yes",
      Age: "2 years",
      Image: "./resources/adoption4-185x185.jpg",
    },
    {
      Name: "pet1",
      Gender: "female",
      Neutered: "Yes",
      Age: "2 years",
      Image: "./resources/adoption5-185x185.jpg",
    },
    {
      Name: "pet1",
      Gender: "female",
      Neutered: "Yes",
      Age: "2 years",
      Image: "./resources/adoption6-185x185.jpg",
    },
    {
      Name: "pet1",
      Gender: "female",
      Neutered: "Yes",
      Age: "2 years",
      Image: "./resources/adoption7-185x185.jpg",
    },
    {
      Name: "pet1",
      Gender: "female",
      Neutered: "Yes",
      Age: "2 years",
      Image: "./resources/adoption8-185x185.jpg",
    },
  ];
  return (
    <div
      class="
            row g-4 text-center
          "
    >
      {pets.map((pet) => {
        return (
          <div class="col m-5 mt-0 m-sm-0 mt-sm-5">
            <div class="card bg-light-custom">
              <img
                class="border-irregular1 img-fluid"
                src={pet.Image}
                alt="a"
              />
              <div class="card-body">
                <h5 class="card-title">{pet.Name}</h5>
                <p class="card-text">
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
                  <div class="mt-4">
                    <a class="btn btn-primary px-3 py-2">MORE INFO</a>
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

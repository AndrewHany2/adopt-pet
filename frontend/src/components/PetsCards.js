import React from "react";
import { Link } from "react-router-dom";

function PetsCards({ pets }) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 text-center m-5 m-sm-0">
      {pets.info
        ? pets.info.list.map((pet) => {
            return (
              <div key={pet._id} className="col mb-4 card-animate">
                <div className="card bg-light-custom border-irregular1">
                  <img
                    className="border-irregular1 img-fluid"
                    src={`../${pet.image}`}
                    alt="a"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{pet.name}</h5>
                    <div className="card-text">
                      <div>
                        <b>gender:</b>
                        {pet.gender}
                      </div>
                      <div>
                        <b>age:</b>
                        {pet.age}
                      </div>
                      <div className="mt-4">
                        <Link
                          to={`/pet/${pet._id}`}
                          className="btn btn-primary px-3 py-2"
                        >
                          More Info
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default PetsCards;

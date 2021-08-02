import React from "react";
import { Link } from "react-router-dom";

function PetsCards({ pets }) {
  let age_now;

  const calculate_age = (dob1) => {
    let today = new Date();
    let birthDate = new Date(dob1); // create a date object directly from `dob1` argument
    age_now = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    if (age_now > 0) return `${age_now} year/s`;
    if (m > 0) return `${m} month/s`;

    let Difference_In_Time = today.getTime() - birthDate.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return `${Difference_In_Days.toFixed(0)} day/s`;
  };

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 text-center m-5 m-sm-0">
      {pets.info
        ? pets.info.list.map((pet) => {
          return (
            <div key={pet._id} className="col mb-4 card-animate">
              <div className="card bg-light-custom border-irregular1">
                <img
                  className="border-irregular1 img-fluid myimg d-block mx-auto"
                  src={`${pet.image}`}
                  alt="pet"
                />
                <div className="card-body">
                  <h5 className="card-title">{pet.name}</h5>
                  <div className="card-text">
                    <div>
                      <b>gender:</b>
                      {` ${pet.gender}`}
                    </div>
                    <div>
                      <b>age:</b>
                      {` ${calculate_age(pet.dateOfBirth)}`}
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

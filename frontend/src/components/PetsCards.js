import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPets } from "../store/actions/petActions";

function PetsCards(props) {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets);

  useEffect(() => {
    dispatch(getPets());
  }, [dispatch]);
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 text-center m-5 m-sm-0">
      {pets.list
        ? pets.list.map((pet) => {
            return (
              <div key={pet._id} className="col mb-4 card-animate">
                <div className="card bg-light-custom border-irregular1">
                  <img
                    className="border-irregular1 img-fluid"
                    src={pet.image}
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
                          to={`/pets/${pet._id}`}
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

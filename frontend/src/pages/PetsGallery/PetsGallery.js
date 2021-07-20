import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PetsCards from "../../components/PetsCards";
import PetsFilter from "../../components/PetsFilter";
import { NavLink as Link } from "react-router-dom";
import { getPets } from "./../../store/actions/petActions";
import Loading from "../../components/loadingComponent/loadingComponent";
import "./petsGallery.css";

function PetsGallery(props) {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets);
  const currentPage = props.match.params.page || 1;

  useEffect(() => {
    handlePetsList();
  }, [currentPage]);

  const handlePetsList = (filterByGender, filterByPet, filterByAge) => {
    dispatch(getPets(currentPage, filterByGender, filterByPet, filterByAge));
  };
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
      <div className="container">
        <PetsFilter getPets={handlePetsList}></PetsFilter>
        <div className="mt-5">
          {pets.loading ? (
            <Loading></Loading>
          ) : (
            <PetsCards pets={pets}></PetsCards>
          )}
        </div>
        {pets.info ? (
          <nav className="mt-5" aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li
                className={
                  pets.info.currentPage === 1
                    ? `page-item disabled`
                    : `page-item`
                }
              >
                <Link
                  className="page-link"
                  exact
                  to={`/pets/${pets.info.currentPage - 1}`}
                >
                  Previous
                </Link>
              </li>
              {[...Array(pets.info.totalPages).keys()].map((x) => (
                <li
                  key={x + 1}
                  className={
                    "page-item" + x + 1 === pets.info.currentPage
                      ? "active"
                      : ""
                  }
                >
                  <Link className="page-link" exact to={`/pets/${x + 1}`}>
                    {x + 1}
                  </Link>
                </li>
              ))}

              <li
                className={
                  pets.info.currentPage === pets.info.totalPages
                    ? `page-item disabled`
                    : `page-item`
                }
              >
                <Link
                  className="page-link"
                  exact
                  to={`/pets/${pets.info.currentPage + 1}`}
                >
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </div>
  );
}

export default PetsGallery;

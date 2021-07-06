import React from "react";
import PetsCards from "../../components/PetsCards";
import "./petsGallery.css";

function PetsGallery(props) {
  return (
    <div>
      <div class="container-fluid backgroundImg p-4">
        <div class="p-2 p-sm-4">
          <i
            class="fa fa-paw"
            style={{ color: "#f9575c", fontSize: "4vw" }}
          ></i>
        </div>
        <div class="adoptionFont myFont">Adoption</div>
        <div class="homeFont myFont">
          <span>HOME {">"}</span>
          <span style={{ color: "#cecece" }}>ADOPTION</span>
        </div>
      </div>
      <div class="container col-12 col-lg-8 pt-5">
        <div class="text-center">
          <p class="myFont headFont">Find a new furry friend</p>
          <p class="myFont bodyFont">
            Aliquam erat lorem ipsum volutpat In id fermentum augue, ut
            pellentesque leo. Maecenas at arcu risus. Donec commodo sodales ex,
            scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis
            maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum
            convall.
          </p>
        </div>
      </div>
      <div class="container">
        <PetsCards></PetsCards>
        <nav class="mt-5" aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default PetsGallery;

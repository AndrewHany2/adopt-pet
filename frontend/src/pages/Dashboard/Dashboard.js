import React from "react";
import PostDashboard from "../../components/dashboard/postDashboard";
import AdoptRequest from "../../components/dashboard/adoptRequest";
import { useEffect, useState } from "react";
export default function Dashboard() {
  const [pets, setPets] = useState([{}]);
  useEffect(() => {
    fetch(`/api/pets/`)
    .then(response => response.json())
    .then(data => setPets(data))
  },[]);
  console.log(pets)
  
  return (
   <>
   <div className="container">
      <div className="row mb-5 mt-3">    
        <div className="col-12 col-md-6">
        <h2>Post</h2>
      <div className="table-responsive">
      <table class="table">
        <thead>
            <tr>
            <th scope="col">User</th>
            <th scope="col">Name-pet</th>
            <th scope="col">Gender</th>
            <th scope="col">Type</th>
            <th scope="col">Vaccinated</th>
            <th scope="col">Size</th>
            <th scope="col">image</th>
            <th colSpan="true" className="text-center">status</th>
            </tr>
        </thead>
            {pets?.list && pets.list.map((pet)=>{
                  return <PostDashboard key={pet._id} pets={pet} />
                })}
            </table>
      </div> 
            </div>

        <div className="col-12 col-md-6">
        <h2>AdoptionRequest</h2>
        <AdoptRequest/>
        </div>
      </div>
      <div className="row mb-5 form-inline">
        <div className="col-12">
            <input class="form-control mr-sm-2" type="search" placeholder="Search By Email" aria-label="Search"/>
            <select className="form-control mr-2">
              <option >Super Admin</option>  
              <option>Admin</option>  
            </select>  
            <button class="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
            <p className="pl-2">Search</p> 
        </div>
      </div>
   </div>
   </>
  );
}

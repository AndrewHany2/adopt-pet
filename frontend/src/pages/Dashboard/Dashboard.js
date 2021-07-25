import { useEffect, useState } from "react";
import PostDashboard from "../../components/dashboard/postDashboard";
import AdoptRequest from "../../components/dashboard/adoptRequest";
import axios from "axios";

export default function Dashboard() {
  const [pets, setPets] = useState([{}]);
  const [req, setReq] = useState([{}]);

  useEffect(() => {
    async function temp() {
      const { data } = await axios.get("/api/pets?status=PENDING");
      setPets(data?.result);
    }
    temp();
  }, []);

  const handleClick = (id) => {
    let temp = [...pets];
    const index = temp.findIndex((pet) => pet._id === id);
    temp.splice(index, 1);
    setPets(temp);
  };

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
                    <th colSpan="true" className="text-center">
                      status
                    </th>
                  </tr>
                </thead>
                {pets?.map((pet) => {
                  return (
                    <PostDashboard
                      key={pet._id}
                      pets={pet}
                      handleClick={handleClick}
                    />
                  );
                })}
              </table>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <h2>AdoptionRequest</h2>
            <div className="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Requested User</th>
                    <th scope="col">Name-pet</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Data of Birth</th>
                    <th scope="col">Type</th>
                    <th scope="col">Size</th>
                    <th scope="col">image</th>
                    <th colSpan="true" className="text-center">
                      status
                    </th>
                  </tr>
                </thead>
                {req &&
                  req.map((req) => {
                    return <AdoptRequest key={req._id} requests={req} />;
                  })}
              </table>
            </div>
          </div>
          <div className="row mb-5 form-inline">
            <div className="col-12">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search By Email"
                aria-label="Search"
              />
              <select className="form-control mr-2">
                <option>Super Admin</option>
                <option>Admin</option>
              </select>
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="button"
              >
                Search
              </button>
              <p className="pl-2">Search</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

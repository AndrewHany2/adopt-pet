import { useEffect, useState } from "react";
import PostDashboard from "../../components/dashboard/postDashboard";
import AdoptRequest from "../../components/dashboard/adoptRequest";
import axios from "axios";
import{useSelector} from "react-redux"

export default function Dashboard() {
  const [pets, setPets] = useState([]);
  const [req, setReq] = useState([]);
  const [search, setSearch] = useState({ isData: false, data: {} });
  const [serachEmail, setSearchEmail] = useState("");
  const userLogin = useSelector((state) => state.userLogin);


  useEffect(() => {
    async function temp() {
      const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    const header = {
      headers: {

        Authorization: userInfo.token,
      },
    };
      const { data } = await axios.get("/api/admin/pendingPets",header);
      setPets(data?.result);
      const response = await axios.get(`/api/admin/pendingApplications`,header);
      setReq(response.data.result);
    }
    temp();
  }, []);

  const handleClick = (id, list) => {
    if (list === "pets") {
      let temp = [...pets];
      const index = temp.findIndex((pet) => pet._id === id);
      temp.splice(index, 1);
      setPets(temp);
    }
    if (list === "requests") {
      let temp = [...req];
      const index = temp.findIndex((element) => element._id === id);
      temp.splice(index, 1);
      setReq(temp);
    }
  };

  const getUser = async () => {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    const header = {
      headers: {

        Authorization: userInfo.token,
      },
    };
    console.log("here");
    const { data } = await axios.get(`/api/user?email=${serachEmail}`,header);
    if(data){

      setSearch({ isData: true, data: data });
    }
    console.log("here");
    console.log(data);
  };

  const setEmail = (event) => {
    setSearchEmail(event.target.value);
  };
  const makeAdmin = async () => {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    const header = {
      headers: {

        Authorization: userInfo.token,
      },
    };
    const { data } = await axios.patch(
      `/api/admin/assignrole/${search.data._id}?role=ADMIN`,header
    );
    console.log("Admin");
    console.log(data);
    const hideUser = { ...search };
    hideUser.isData = false;
    setSearch(hideUser);
  };
  const removeAdmin = async () => {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    const header = {
      headers: {

        Authorization: userInfo.token,
      },
    };
    const { data } = await axios.patch(
      `/api/admin/assignrole/${search.data._id}?role=USER`,header
    );
    console.log("Not Admin");
    console.log(data);
    const hideUser = { ...search };
    hideUser.isData = false;
    setSearch(hideUser);
  };

console.log("SUPR_ADMIN")
console.log(userLogin)

  return (
    <>
     {userLogin.info.userRole === "SUPER_ADMIN" && <div className="row my-5 form-inline">
        <div className="col-12 d-flex justify-content-center">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search By Email"
            aria-label="Search"
            value={serachEmail}
            onChange={setEmail}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="button"
            onClick={getUser}
          >
            Search
          </button>
        </div>
        {search.isData && (
          <div className="d-flex justify-content-center w-100">
            <div
              className="card d-flex flex-column align-content-center"
              style={{ width: "18rem" }}
            >
              <img
                className="card-img-top"
                src={search.data.image?search.data.image:`/resources/noAvatar.png`}
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {search.data.firstName} {search.data.lastName}
                </h5>
              </div>
              <ul class="list-group list-group-flush">
                {search.data?.phone && <li class="list-group-item"><strong>Phone:</strong> {search.data.phone} </li>}
                {search.data?.country && <li class="list-group-item"><strong>Country:</strong>  {search.data.country}</li>}
                {search.data?.city && <li class="list-group-item"><strong>City:</strong>  {search.data.city}</li>}
              </ul>
              <div className="d-flex justify-content-center w-100">
                <div class="card-body">
                  <button className="btn btn-danger" onClick={makeAdmin}>
                    Make Admin
                  </button>
                </div>
                <div class="card-body">
                  <button className="btn btn-danger" onClick={removeAdmin}>
                    Remove Admin
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>}
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
                      pet={pet}
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
                    return (
                      <AdoptRequest
                        key={req._id}
                        request={req}
                        handleClick={handleClick}
                      />
                    );
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

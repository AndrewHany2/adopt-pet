import { useEffect, useState } from "react";
import axios from "axios";
import DashboardNavbar from "../../components/dashboard/navbar/nav-bar";
import AdoptRequest from "../../components/dashboard/adoptRequest";
import { Spinner } from "react-bootstrap";

export default function AdoptionRequests() {
  const [req, setReq] = useState([]);

  useEffect(() => {
    async function temp() {
      const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
      const header = {
        headers: {
          Authorization: userInfo.token,
        },
      };
      const response = await axios.get(
        `/api/admin/pendingApplications`,
        header
      );
      setReq(response.data.result);
    }
    temp();
  }, []);

  const handleClick = (id) => {
    let temp = [...req];
    const index = temp.findIndex((element) => element._id === id);
    temp.splice(index, 1);
    setReq(temp);
  };

  return (
    <>
      <DashboardNavbar />
      {req?.length ? (
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
                <th scope="col">Accept</th>
                <th scope="col">Decline</th>
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
      ) : (
        <div className="text-center mt-4 mb-5">
          <span>Loading Adoption Requests.. &nbsp;&nbsp;</span>
          <Spinner animation="grow" variant="warning" />
        </div>
      )}
    </>
  );
}

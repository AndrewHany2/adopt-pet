import React, { useEffect, useState } from "react";
import axios from "axios";

function PendingRequests(props) {
  const [requests, setRequests] = useState("");
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
      setRequests(response.data.result);
    }
    temp();
  }, []);

  const handleClick = (id) => {
    let temp = [...requests];
    const index = temp.findIndex((element) => element._id === id);
    temp.splice(index, 1);
    setRequests(temp);
  };

  const handleAccept = (req) => {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    const header = {
      headers: {
        Authorization: userInfo.token,
      },
    };
    axios.patch(`/api/adoptionRequest/acceptByUser/${req._id}`, {}, header);
    handleClick(req._id);
  };

  const handleReject = (req) => {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    const header = {
      headers: {
        Authorization: userInfo.token,
      },
    };
    axios.patch(`/api/adoptionRequest/rejectByUser/${req._id}`, {}, header);
    handleClick(req._id);
  };

  return (
    <div className="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Requested User</th>
            <th scope="col">Name-pet</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Type</th>
            <th scope="col">Size</th>
            <th scope="col">image</th>
            <th scope="col">Accept</th>
            <th scope="col">Decline</th>
          </tr>
        </thead>
        {requests &&
          requests.map((req) => {
            return (
              <>
                {!req.acceptedByUser && (
                  <tbody>
                    <tr>
                      <th scope="row">
                        {req.requestedUserId.email}{" "}
                        {req.acceptedByAdmin && (
                          <div class="alert alert-primary" role="alert">
                            accepted by admin and waiting for you
                          </div>
                        )}
                      </th>
                      <td>{req.petId.name}</td>
                      <td>{req.petId.gender}</td>
                      <td>{calculate_age(req.petId.dateOfBirth)}</td>
                      <td>{req.petId.petType}</td>
                      <td>{req.petId.size}</td>
                      <td>
                        <img
                          src={req.petId.image}
                          width="40px"
                          height="40px"
                          className="rounded-circle"
                          alt="pet"
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={() => {
                            handleAccept(req);
                          }}
                        >
                          Accept
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            handleReject(req);
                          }}
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  </tbody>
                )}
              </>
            );
          })}
      </table>
    </div>
  );
}

export default PendingRequests;

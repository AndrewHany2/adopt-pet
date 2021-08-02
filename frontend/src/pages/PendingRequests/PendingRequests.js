import React, { useEffect, useState } from "react";
import axios from "axios";
import './pending-request.css'
import { Spinner } from 'react-bootstrap';

function PendingRequests(props) {
  const [requests, setRequests] = useState(null);

  useEffect(() => {
    async function temp() {
      const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
      const header = {
        headers: {
          Authorization: userInfo.token,
        },
      };
      const response = await axios.get(
        `/api/adoptionRequest/accepted-by-admin?userId=${userInfo.userId}`,
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
    <>
      {!requests ? (
        <div className="text-center mt-4 mb-5">
          <span>Loading Pets Requests.. &nbsp;&nbsp;</span>
          <Spinner animation="grow" variant="warning" />
        </div>
      ) : requests.length > 0 ? (
        <div className="table-responsive user-adoption-request">
          <table className="table my-5">
            <thead>
              <tr>
                <th scope="col">Pet</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">email</th>
                <th scope="col">User Image</th>
                <th scope="col">Accept</th>
                <th scope="col">Decline</th>
              </tr>
            </thead>
            {requests &&
              (<tbody>
                {requests.map(req => (
                  req.acceptedByAdmin &&
                  (<tr key={req._id}>
                    <td>{req.petId.name}</td>
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
                      {`${req.requestedUserId.firstName} ${req.requestedUserId.lastName}`}
                    </td>
                    <td>
                      {req.requestedUserId.email}
                    </td>
                    <td>
                      <img
                        src={req.requestedUserId.image ? req.requestedUserId.image : '/assets/person/noAvatar.png'}
                        width="40px"
                        height="40px"
                        className="rounded-circle"
                        alt="user"
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => handleAccept(req)}
                      >
                        Accept
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleReject(req)}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>)))}
              </tbody>)}
          </table>
        </div>) : (
        <div className="alert alert-info w-50 my-5 mx-auto text-center p-0" style={{ height: '350px', lineHeight: '350px', fontSize: '22pt' }}>
          No Pets Requests
        </div>
      )}
    </>
  );
}

export default PendingRequests;

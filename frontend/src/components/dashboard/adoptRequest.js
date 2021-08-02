import React from "react";
import axios from "axios";
// import moment from "moment";

function AdoptRequest(props) {
  let age_now;

  const calculate_age = (dob1) => {
    let today = new Date();
    let birthDate = new Date(dob1); // create a date object directly from `dob1` argument
    age_now = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    if (age_now > 0) return `${age_now} Hear`;
    if (m > 0) return `${m} Month`;

    let Difference_In_Time = today.getTime() - birthDate.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return `${Difference_In_Days.toFixed(0)} Day`;
  };

  const handleAccept = () => {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    const header = {
      headers: {
        Authorization: userInfo.token,
      },
    };
    axios.patch(
      `/api/admin/application/acceptByAdmin/${props.request._id}`,
      {},
      header
    );
    props.handleClick(props.request._id);
  };

  const handleReject = () => {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    const header = {
      headers: {
        Authorization: userInfo.token,
      },
    };
    axios.patch(
      `/api/admin/application/decline/${props.request._id}`,
      {},
      header
    );
    props.handleClick(props.request._id);
  };
  return (
    <>
      {!props.request.acceptedByAdmin && (
        <tbody>
          <tr>
            <td>
              {props.request.requestedUserId.email}
            </td>
            <td>{props.request.petId.name}</td>
            <td>{props.request.petId.gender}</td>
            <td>{calculate_age(props.request.petId.dateOfBirth)}</td>
            <td>{props.request.petId.petType}</td>
            <td>{props.request.petId.size}</td>
            <td>
              <img
                src={props.request.petId.image}
                width="40px"
                height="40px"
                className="rounded-circle"
                alt="pet"
              />
            </td>
            <td>
              <button className="btn btn-success" onClick={handleAccept}>
                Accept
              </button>
            </td>
            <td>
              <button className="btn btn-danger" onClick={handleReject}>
                Reject
              </button>
            </td>
          </tr>
        </tbody>
      )}
    </>
  );
}
export default AdoptRequest;

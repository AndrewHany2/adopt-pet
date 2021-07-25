import React from "react";
import axios from "axios";


function AdoptRequest(props) {
  const handleAccept = () => {
    axios.patch(`/api/admin/application/accept/${props.request._id}`);
    props.handleClick(props.request._id, "requests");
  };

  const handleReject = () => {
    axios.patch(`/api/admin/application/reject/${props.request._id}`);
    props.handleClick(props.request._id, "requests");
  };
  return (
    <tbody>
      <tr>
        <th scope="row">{props.request.requestedUserId.email}</th>
        <td>{props.request.petId.name}</td>
        <td>{props.request.petId.gender}</td>
        <td>{props.request.petId.dateOfBirth}</td>
        <td>{props.request.petId.petType}</td>
        <td>{props.request.petId.size}</td>
        <td>
          <img
            src={props.request.petId.image}
            width="50"
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
  );
}
export default AdoptRequest;

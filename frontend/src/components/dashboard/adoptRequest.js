import React from "react";
import axios from "axios";
import moment from 'moment';

function AdoptRequest(props) {
  const handleAccept = () => {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    const header = {
      headers: {

        Authorization: userInfo.token,
      },
    };
    axios.patch(`/api/admin/application/accept/${props.request._id}`,header);
    props.handleClick(props.request._id, "requests");
  };

  const handleReject = () => {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    const header = {
      headers: {

        Authorization: userInfo.token,
      },
    };
    axios.patch(`/api/admin/application/reject/${props.request._id}`,header);
    props.handleClick(props.request._id, "requests");
  };



  return (
    <tbody>
      <tr>
        <th scope="row">{props.request.requestedUserId.email}</th>
        <td>{props.request.petId.name}</td>
        <td>{props.request.petId.gender}</td>
        <td>{moment(props.request.petId.dateOfBirth).format('DD/MM/YYYY')}</td>
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

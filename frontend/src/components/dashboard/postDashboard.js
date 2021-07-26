import React from "react";
import axios from "axios";
function PostDashboard(props) {
  const handleClickAccept = () => {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    const header = {
      headers: {
        Authorization: userInfo.token,
      },
    };
    const id = props.pet._id;
    axios.patch(`/api/admin/postPet/accept/${id}`, header);
    props.handleClick(props.pet._id);
  };
  const handleClickReject = () => {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    const header = {
      headers: {
        Authorization: userInfo.token,
      },
    };
    const id = props.pet._id;
    axios.patch(`/api/admin/postPet/reject/${id}`, {},header);
    props.handleClick(props.pet._id);
  };
  return (
    <tbody>
      <tr>
        <th scope="row">{props.pet.owner?.email}</th>
        <td>{props.pet.name}</td>
        <td>{props.pet.gender}</td>
        <td>{props.pet.petType}</td>
        <td>{props.pet.vaccinated}</td>
        <td>{props.pet.size}</td>
        <td>
          <img
            src={props.pet.image}
            width="40px"
            height="40px"
            className="rounded-circle"
            alt="pet"
          />
        </td>
        <td>
          <button className="btn btn-success" onClick={handleClickAccept}>
            Accept
          </button>
        </td>
        <td>
          <button className="btn btn-danger" onClick={handleClickReject}>
            Reject
          </button>
        </td>
      </tr>
    </tbody>
  );
}
export default PostDashboard;

import React from "react";
import axios from "axios";

function PostDashboard(props) {
  const handleClickAccept = async () => {
    const id = props.pet._id;
    await axios.patch(`/api/admin/postPet/accept/${id}`);
    props.handleClick(props.pet._id, "pets");
  };
  const handleClickReject = async () => {
    const id = props.pet._id;
    await axios.patch(`/api/admin/postPet/reject/${id}`);
    props.handleClick(props.pet._id, "pets");
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
            width="50"
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

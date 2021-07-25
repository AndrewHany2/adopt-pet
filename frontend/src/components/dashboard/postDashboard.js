import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
function PostDashboard(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function temp() {
      const { data } = await axios.get(`/api/user/${props.pets.owner}`);
      setUser(data);
    }
    temp();
  }, []);
  const handleClickAccept = async () => {
    const id = props.pets._id;
    await axios.patch(`/api/admin/postPet/accept/${id}`);
    props.handleClick(props.pets._id);
  };
  const handleClickReject = async () => {
    const id = props.pets._id;
    await axios.patch(`/api/admin/postPet/reject/${id}`);
    props.handleClick(props.pets._id);
  };
  return (
    <tbody>
      <tr>
        {user ? <th scope="row">{user.email}</th> : null}
        <td>{props.pets.name}</td>
        <td>{props.pets.gender}</td>
        <td>{props.pets.petType}</td>
        <td>{props.pets.vaccinated}</td>
        <td>{props.pets.size}</td>
        <td>
          <img
            src={props.pets.image}
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

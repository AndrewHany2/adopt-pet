import React from "react"
import { useEffect, useState } from "react";
import axios from 'axios'
function PostDashboard(props){
    const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`/api/user/${props.pets.owner}`)
    .then(response => response.json())
    .then(data => setUser(data))
  },[]);
  const handleClickAccept =() => {
    const id = props.pets._id;
     axios.patch(`/api/admin/postPet/accept/${id}`)
}
const handleClickReject =() => {
  const id = props.pets._id;
   axios.patch(`/api/admin/postPet/reject/${id}`)
}
    return(
<tbody>
        <tr>
        <th scope="row">{user.email}</th>
        <td>{props.pets.name}</td>
        <td>{props.pets.gender}</td>
        <td>{props.pets.petType}</td>
        <td>{props.pets.vaccinated}</td>
        <td>{props.pets.size}</td>
        <td><img src={props.pets.image} width="50" className="rounded-circle"/></td>
        <td><button className="btn btn-success" onClick={handleClickAccept}>Accept</button></td>
        <td><button className="btn btn-danger" onClick={handleClickReject}>Reject</button></td>
        </tr>
    </tbody>
    ) 

}
export default PostDashboard
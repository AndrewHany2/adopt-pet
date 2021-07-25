import React from "react"
import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment'


function AdoptRequest(props){
    const [user, setUser] = useState({});
    const [pet, setPet] = useState({});
     const requestedUsers = ()=>{
        fetch(`/api/user/${props.requests.requestedUserId}`)
        .then((res)=> res.json())
        .then(data => setUser(data))
        .catch(err => console.log("Error"));
    }

    const requestedPets = ()=>{
        fetch(`/api/pets/${props.requests.petId}`)
        .then(res => res.json())
        .then(data => setPet(data))
        .catch(err => console.log("Error"));
    }

    const handleAccept = ()=>{
        axios.patch(`/api/admin/adoptPet/accept/${props.requests.petId}`)
    }

    const handleReject = ()=>{
        axios.patch(`/api/admin/adoptPet/reject/${props.requests.petId}`)
    }

    useEffect(() => {
        requestedUsers();
        requestedPets();
      },[]);

        return(
            <tbody>
                <tr>
                <th scope="row">{user.email}</th>
                <td>{pet.name}</td>
                <td>{pet.gender}</td>
                <td>{moment(pet.dateOfBirth).format("DD/MM/YYYY")}</td>
                <td>{pet.petType}</td>
                <td>{pet.size}</td>
                <td><img src={pet.image} width="50" className="rounded-circle"/></td>
                <td><button className="btn btn-success" onClick={handleAccept}>Accept</button></td>
                <td><button className="btn btn-danger" onClick={handleReject}>Reject</button></td>
                </tr>
            </tbody>
            )
}
export default AdoptRequest

import React from "react";
import axios from "axios";
import moment from 'moment'

function AdoptRequest(props) {
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
  const handleAccept = () => {
    axios.patch(`/api/admin/application/accept/${props.request._id}`);
    props.handleClick(props.request._id, "requests");
  };

  const handleReject = () => {
    axios.patch(`/api/admin/application/reject/${props.request._id}`);
    props.handleClick(props.request._id, "requests");
  };

  useEffect(() => {
    requestedUsers();
    requestedPets();
  },[]);

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

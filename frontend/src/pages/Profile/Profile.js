import React from "react";
import UserInfo from "../../components/UserInfo";
import { useEffect, useState } from 'react'
import { useParams } from "react-router"
import PetInfo from './../../components/PetInfo';
import PageHeader from "../../components/PageHeader";



function Profile() {
  const { id } = useParams()
  const [user, setUser] = useState({})
  useEffect(() => {
      fetch(`http://localhost:3000/profile/${id}`)
          .then(response => response.json())
          .then(data => setUser(data))
  }, [])

  return (
    <div>
    <PageHeader title='Profile'/>
    <UserInfo user={user}/>
    {
      user.pet ? <PetInfo info={user.pet}/> : ""

    }
    </div>
  );
}

export default Profile;

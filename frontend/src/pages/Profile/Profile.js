import React from "react";
import UserInfo from "../../components/UserInfo";
import { useEffect, useState } from 'react'
import { useParams } from "react-router"
import PetInfo from './../../components/PetInfo';
import PageHeader from "../../components/PageHeader";
import axios from "axios";


function Profile() {
  const { id } = useParams()
  const [user, setUser] = useState({})
  useEffect( () => {
   const getUser = async ()=>{

      const header = {
        headers: {
          Authorization: window.localStorage.getItem("token")
        }
      }
        const {data} = await axios.get(`/api/user/profile/${id}`,header);
        setUser(data);

    }
    getUser()

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

import React from "react";
import UserInfo from "../../components/UserInfo";
import { useEffect } from "react";
import { useParams } from "react-router";
import PetInfo from "./../../components/PetInfo";
import PageHeader from "../../components/PageHeader";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../store/actions/UserActions";

function Profile() {
  const { id } = useParams();
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  console.log(userData);
  return (
    <div>
      <PageHeader title="Profile" />
      {userData?.info && <UserInfo user={userData.info} />}
      {userData?.info && userData.info.postedPets.map((pet)=>{return <PetInfo info={pet}/>})}
    </div>
  );
}

export default Profile;

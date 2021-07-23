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

  return (
    <div>
      <PageHeader title="Profile" />
      {userData?.info && <UserInfo user={userData.info} />}
      {userData?.info && <PetInfo info={userData.info} />}
    </div>
  );
}

export default Profile;

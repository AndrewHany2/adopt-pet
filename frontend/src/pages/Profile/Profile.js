import React from "react";
import UserInfo from "../../components/UserInfo";
import { useEffect } from "react";
import { useParams } from "react-router";
import PageHeader from "../../components/PageHeader";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../store/actions/UserActions";
import LoadingScreen from "../../components/Loading/loading";
import PetInfo from "../../components/PetInfo";

function Profile() {
  const { id } = useParams();
  const profileData = useSelector((state) => state.profile);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getProfile(id));
  }, []);

  console.log("Profile Data")
  console.log(profileData.petInfo);
  if (profileData.loading) {
    return (
      <>
        <LoadingScreen></LoadingScreen>
      </>
    );
  } else {
    return (
      <div>
        <PageHeader title="Profile" />
        <div className="container">
        {profileData?.userInfo && <UserInfo userInfo={profileData.userInfo} />}
        
        { profileData?.petsInfo !== undefined && (<div className="container">
          <div className="alert alert-primary mt-5 p-4" role="alert">
            <div style={{ color: "white" }}>
              <p className="h3">Adoption Rules</p>
              <p style={{ color: "white" }}>
                Elit uasi quidem minus id omnis a nibh fusce mollis imperdie
                tlorem ipuset phas ellus ac sodales Lorem ipsum dolor Phas ellus
                ac sodales felis tiam non metus. lorem ipsum dolor sit amet,
                consectetur adipisicing elit uasi quidem minus id omnis a nibh
                fusce mollis imperdie tlorem ipuset campas fincas
              </p>
            </div>
          </div>
        </div>) 
        }
        {profileData?.petsInfo !== undefined &&
          profileData.petsInfo.map((pet) => { 
            return <PetInfo key={pet} petInfo={pet} />;
          })}
      </div>
      </div>
    );
  }

}

export default Profile;

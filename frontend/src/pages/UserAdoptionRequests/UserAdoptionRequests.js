import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "font-awesome/css/font-awesome.min.css";
import { getAdoptionRequests } from "../../store/actions/DashboardActions"
import RequestsInfo from "../../components/RequsestsInfo";
import LoadingScreen from "../../components/loadingComponent/loadingComponent"

function UserAdoptionRequests({ match }) {

  const requests = useSelector((state) => state.userAdoptionRequests);
  const dispatch = useDispatch();
  const id = match.params.id;
  useEffect(() => {
    dispatch(getAdoptionRequests(id))
  }, [dispatch, id])


  if (requests?.loading) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
        <LoadingScreen></LoadingScreen>
      </div>
    );
  } else if(requests?.success && requests.info[0]?._id ) {
    return (
      <>
        {requests?.info && requests.info.map((request) => { return <RequestsInfo key={request._id} requests={request} /> })}
      </>
    );
  }else{
    return (
      <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
        <h1 style={{color:"#F9575C"}}>No Adoption Requests Yet</h1>
      </div>
    );
  }
}
export default UserAdoptionRequests;

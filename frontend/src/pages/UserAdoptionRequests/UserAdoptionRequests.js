
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "font-awesome/css/font-awesome.min.css";
import{getAdoptionRequests} from "../../store/actions/DashboardActions"
import RequestsInfo from "../../components/RequsestsInfo";
import LoadingScreen from "../../components/loadingComponent/loadingComponent"

function UserAdoptionRequests({match}) {

    const requests = useSelector((state)=>state.userAdoptionRequests);
    const dispatch = useDispatch();
    const id = match.params.id;
    useEffect(()=>{
        dispatch(getAdoptionRequests(id))
    },[])
    console.log("UAR")
    console.log(requests)
  
    if (requests?.loading) {
      return (
        <div className="d-flex align-items-center justify-content-center"style={{height:"100vh"}}>
          <LoadingScreen></LoadingScreen>
        </div>
      );
    } else {
  return (
<>
 { requests?.info &&  requests.info.map((request)=>{console.log("request");console.log(request);return<RequestsInfo requests={request}/>})}
</>
  );
}
}
export default UserAdoptionRequests;

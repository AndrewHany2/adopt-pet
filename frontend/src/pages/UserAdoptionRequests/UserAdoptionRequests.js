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
  } else if (requests?.success && requests.info[0]?._id) {
    return (
      <div className="table-responsive user-adoption-request">
        <table className="table my-5">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Pet</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
              <th scope="col">Vaccinated</th>
              <th scope="col">Size</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {requests?.info && requests.info.map((request) => { return <RequestsInfo key={request._id} requests={request} /> })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="alert alert-info w-50 my-5 mx-auto text-center display-4 p-0" style={{ height: '350px', lineHeight: '350px' }}>
        No Adoption Requests
      </div>
    );
  }
}
export default UserAdoptionRequests;

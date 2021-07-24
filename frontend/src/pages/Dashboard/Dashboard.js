import React,{useEffect} from "react";
import PostDashboard from "../../components/dashboard/postDashboard";
import AdoptRequest from "../../components/dashboard/adoptRequest";
import axios from "axios";

export default function Dashboard() {
  const baseURL = "/api/adoptionRequest/";
  let user ;
  const getAllRequests = ()=>{
      axios.get(`${baseURL}`)
      .then((res)=>{
        const reqData = res.data;
        user = res.data;
        reqData.map((data)=>{

            console.log(data.requestedUserId);
          })
          console.log(res.data);
      })
      .catch(err => console.log("Error"));
  }

  useEffect(()=>{
      getAllRequests();
  },[])

  return (
   <>
   <div className="container">
      <div className="row mb-5 mt-3">    
        <div className="col-12 col-md-6">
        <h2>Post</h2>
      <PostDashboard />
        </div>
        <div className="col-12 col-md-6">
        <h2>AdoptionRequest</h2>
        <AdoptRequest data={user}/>
        </div>
      </div>
      <div className="row mb-5 form-inline">
        <div className="col-12">
            <input class="form-control mr-sm-2" type="search" placeholder="Search By Email" aria-label="Search"/>
            <select className="form-control mr-2">
              <option >Super Admin</option>  
              <option>Admin</option>  
            </select>  
            <button class="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
            <p className="pl-2">Search</p> 
        </div>
      </div>
   </div>
   </>
  );
}

import React from "react";
import {Link, useHistory} from 'react-router-dom'
import {useSelector} from "react-redux"
import { propTypes } from "react-bootstrap/esm/Image";

function UserInfo(props) {
  // const requestStyles = {
  //   background: "#ef0707",
  //   width: "12%",
  //   borderRadius: "50%",
  //   fontSize: "15pt",
  //   padding: "0 0 0 0.6rem",
  //   color: "#fff",
  //   margin: "0 0 0 1rem",
  // };
  const {push} = useHistory()
const userLogin = useSelector((state)=>state.userLogin)
  return (
    <div className="container mb-5">
      <div className="row">
          <div className="col-md-4">
          <img src={
            props.userInfo.image?
            `../resources/${props.userInfo.image}`
            : '/assets/person/noAvatar.png'
          }
             className="img-fluid about-img w-100" alt=""/>

          {/* <div style={{ margin: '2rem 0 0 6rem'}}>
            Adoption Request<label style={{    background: '#ef0707',
                                                width: '12%',
                                                borderRadius: '50%',
                                                fontSize: '15pt',
                                                padding: '0 0 0 0.6rem',
                                                color: '#fff',
                                                margin: '0 0 0 1rem'
                                            }}>{props.userInfo.request}</label>
          </div> */}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-primary display-5 mb-5">
              {props.userInfo.name}
            </h5>
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <th colSpan="3">Name</th>
                    <td>{props.userInfo.firstName} {props.userInfo.lastName}</td>


                  </tr>
                  <tr>
                    <th colSpan="3">Email</th>
                    <td>{props.userInfo.email}</td>
                  </tr>
                  <tr>
                    <th colSpan="3">City</th>
                    <td>{props.userInfo.city}</td>
                  </tr>
                  <tr>
                    <th colSpan="3">Phone </th>
                    <td>{props.userInfo.phone}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <a class="me-4" style={{ margin: "1rem" }}> */}
            <button class="btn btn-lg btn-success" onClick={()=>push(`/editprofile`)}>
              <i class="fa fa-pencil-square"></i>
            </button>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
}

export default UserInfo;

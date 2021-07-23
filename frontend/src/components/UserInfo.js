import React from "react";

function UserInfo({userInfo}) {
  const requestStyles = {
    background: "#ef0707",
    width: "12%",
    borderRadius: "50%",
    fontSize: "15pt",
    padding: "0 0 0 0.6rem",
    color: "#fff",
    margin: "0 0 0 1rem",
  }
  
  return (
    <div className="container d-flex" style={{ margin: "3rem 2rem" }}>
      <div className="row justify-content-center">
          <div className="col-md-4 ">
          <img src={
            userInfo.image?
            `../resources/${userInfo.image}`
            : '/assets/person/noAvatar.png'
          }
             className="img-fluid about-img" alt=""/>
          {/* <div style={{ margin: '2rem 0 0 6rem'}}>
            Adoption Request<label style={{    background: '#ef0707',
                                                width: '12%',
                                                borderRadius: '50%',
                                                fontSize: '15pt',
                                                padding: '0 0 0 0.6rem',
                                                color: '#fff',
                                                margin: '0 0 0 1rem'
                                            }}>{userInfo.request}</label>
          </div> */}
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-primary display-5 mb-5">
              {userInfo.name}
            </h5>
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <th colSpan="3">Name</th>
                    <td>{userInfo.firstName} {userInfo.lastName}</td>

                  </tr>
                  <tr>
                    <th colSpan="3">Email</th>
                    <td>{userInfo.email}</td>
                  </tr>
                  <tr>
                    <th colSpan="3">City</th>
                    <td>{userInfo.city}</td>
                  </tr>
                  <tr>
                    <th colSpan="3">Phone </th>
                    <td>{userInfo.phone}</td>
                  </tr>
                  <tr>
                    <th colSpan="3"></th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a class="me-4" style={{ margin: "1rem" }}>
              <button class="btn btn-lg btn-success">
                <i class="fa fa-pencil-square"></i>
              </button>
            </a>
            <button class="btn btn-lg btn-danger">
              <i class="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
  );
}

export default UserInfo;

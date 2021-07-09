import React from "react";


function UserInfo(props) {
  console.log(props.user)
  return (
      <div className="container">
      <div className="row">
          <div className="col-md-4">
          <img src={`../resources/${props.user.image}`} className="img-fluid about-img"/>
          </div>
          <div className="col-md-8">
          <div className="card-body">
          <h5 className="card-title text-primary display-5 mb-5">{props.user.name}</h5>
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <th colSpan="3">Name</th>
                    <td>{props.user.name}</td>
                  </tr>
                  <tr>
                    <th colSpan="3">Email</th>
                    <td>{props.user.email}</td>
                  </tr>
                  <tr>
                    <th colSpan="3">City</th>
                    <td>{props.user.city}</td>
                  </tr>
                  <tr>
                        <th colSpan="3">Phone </th>
                        <td>{props.user.phone}</td>
                  </tr>
                  <tr>
                  <th colSpan="3"></th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
      </div>
    </div>
    </div>
  );

}

export default UserInfo;

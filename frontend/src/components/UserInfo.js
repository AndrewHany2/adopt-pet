import React from "react";


function UserInfo(props) {
  return (
      <div className="container" style={{margin: '3rem 2rem'}}>
      <div className="row">
          <div className="col-md-4">
          <img src={`../resources/${props.user.image}`} className="img-fluid about-img"/>
          <div style={{ margin: '2rem 0 0 6rem'}}>
            Adoption Request<label style={{    background: '#ef0707',
                                                width: '12%',
                                                borderRadius: '50%',
                                                fontSize: '15pt',
                                                padding: '0 0 0 0.6rem',
                                                color: '#fff',
                                                margin: '0 0 0 1rem'
                                            }}>{props.user.request}</label>
          </div>
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
              <a class="me-4" style={{margin:'1rem'}}>
                <button class="btn btn-lg btn-success"><i class="fa fa-pencil-square"></i>
                </button></a>
              <button class="btn btn-lg btn-danger"><i class="fa fa-trash"></i></button>

            </div>
      </div>
    </div>
    </div>
  );

}

export default UserInfo;

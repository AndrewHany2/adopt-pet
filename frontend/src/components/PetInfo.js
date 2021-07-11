import React from "react";




function PetInfo(props) {
console.log(props)
  return (
      <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            </div>
            <div className="col-md-9">
            <h3 style={{ margin: '0 0 1rem 0'}}>Pet Info</h3>
            <div className="table-responsive">
            <img src={`../resources/${props.info.image}`} className="img-fluid about-img m-3"/>

              <table className="table">
                <tbody>
                  <tr>
                    <th colSpan="3">Name</th>
                    <td>{props.info.name}</td>
                  </tr>
                  <tr>
                    <th colSpan="3">Gender</th>
                    <td>{props.info.gender}</td>
                  </tr>
                  <tr>
                    <th colSpan="3">Type</th>
                    <td>{props.info.type}</td>
                  </tr>
                </tbody>
              </table>


              </div>
              </div>
            </div>
            </div>
        </>
  );
}

export default PetInfo;

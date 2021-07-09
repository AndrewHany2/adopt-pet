import React from "react";




function PetInfo(props) {
console.log(props)
  return (
      <>
      <h3>Pet Info</h3>
            <div className="table-responsive">
            <img src={`../resources/${props.info.image}`} className="img-fluid about-img"/>

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
                  <tr>
                        <th colSpan="3">Sort </th>
                        <td>{props.info.sort}</td>
                  </tr>
                  <tr>
                  <th colSpan="3"></th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              </div>
        </>
  );
}

export default PetInfo;

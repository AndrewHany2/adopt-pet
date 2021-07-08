import React from "react";


function Profile() {
  return (
    <div className="container">
    <div className="row">
        <div class="col-md-4">
        <img class="img-fluid" src={''} alt="user"/>
        </div>
        <div class="col-md-8">
          <div class="table-responsive">
            <table class="table">
              <tbody>
                <tr>
                  <th colspan="3">Id</th>
                  <td>1</td>
                </tr>
                <tr>
                  <th colspan="3">Name</th>
                  <td>Marina</td>
                </tr>
                <tr>
                  <th colspan="3">Username</th>
                  <td>marina</td>
                </tr>
                <tr>
                  <th rowspan="7">Addrress</th>
                </tr>
                <tr>
                  <th colspan="2">Street</th>
                  <td>123St</td>
                </tr>
                <tr>
                  <th colspan="2">Suite</th>
                  <td></td>
                </tr>
                <tr>
                  <th colspan="2">City</th>
                  <td>Cairo</td>
                </tr>
                <tr>
                  <th colspan="2">Zipcode</th>
                  <td>123456</td>
                </tr>
                <tr>
                  <th colspan="3">Phone</th>
                  <td>012345678</td>
                </tr>
                <tr>
                  <th colspan="3">Website</th>
                  <td></td>
                </tr>
                <tr>
                  <th rowspan="4">Company</th>
                </tr>
                <tr>
                  <th colspan="2">Name</th>
                  <td></td>
                </tr>
                <tr>
                  <th colspan="2">Catch Phrase</th>
                  <td></td>
                </tr>
                <tr>
                  <th colspan="2">BS</th>
                  <td></td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
    </div>
  </div>
  );
}

export default Profile;
